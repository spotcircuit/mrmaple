from bs4 import BeautifulSoup
import re
import csv

FIELDS = ["Name", "Type", "Zones", "Spring Color", "Fall Color", "Growth Habit", "Average Height After 10 YR", "Growth Rate"]

def parse_zones(text):
    # Match patterns like "Zones 5-9" or "Zone 5" case-insensitive
    match = re.search(r'Zones?\s*(\d+(?:-\d+)?)(?!\S)', text, re.IGNORECASE)
    if match:
        return "Zones " + match.group(1)
    return None

def parse_fall_color(text):
    # Attempt to match phrases like:
    # "Fall colors are bright oranges to reds." or "Fall color is ..."
    patterns = [
        r'Fall color(?:s)?(?: are| is)?\s+(.*?[.])',
        r'Fall color(?:s)?:?\s+(.*?\.)'
    ]
    for pat in patterns:
        match = re.search(pat, text, re.IGNORECASE)
        if match:
            return match.group(1).strip(' .')
    return None

def parse_height_10yr(text):
    # First try to find height with years:
    patterns = [
        r'(?:may|will|can) reach\s+(\d+-?\d*)\s*ft.*?\bin\s+(\d+-?\d*)\s+years',
        r'reaching\s+(\d+-?\d*)\s*ft.*?\bin\s+(\d+-?\d*)\s+years',
        r'(\d+-?\d*)\s*ft.*?\b(in|after)\s+(\d+)\s+years'
    ]
    for pat in patterns:
        m = re.search(pat, text, re.IGNORECASE)
        if m:
            # Identify groups for height and years depending on the pattern
            groups = m.groups()
            # Usually the first matched number is height, last matched number is years
            # We'll pick the first numeric as height and the last numeric as years
            nums = re.findall(r'\d+', ' '.join(groups))
            if len(nums) >= 2:
                height = nums[0]
                years = nums[-1]
                return f"{height} ft in {years} years"

    # If no "in X years" phrase is found, try to find a generic max height:
    # e.g. "can reach 15-20 ft in height" without mentioning years.
    max_height_match = re.search(r'(?:may|can|will) reach\s+(\d+-?\d*)\s*ft', text, re.IGNORECASE)
    if max_height_match:
        height = max_height_match.group(1)
        return f"{height} ft"  # no timeframe, just a max height

    return None

def parse_growth_rate(text):
    if "slow growing" in text.lower():
        return "Slow"
    if "fast growing" in text.lower():
        return "Fast"
    # "vigorous" could imply fast, but we won't guess unless instructed
    return None

def parse_spring_color(text):
    # This remains heuristic. We'll try a broader approach:
    # Look for "leafs out in the spring" and capture adjacent color words
    match = re.search(r'leafs out.*?(?:in the spring).*?(?:a|an)\s+(\w+(?:[- ]\w+)*)\s+color', text, re.IGNORECASE)
    if match:
        return match.group(1).strip()
    return None

def parse_growth_habit(text):
    habits = ["weeping", "upright", "compact", "dwarf", "rounded", "pyramidal", "spreading"]
    found = set()
    for w in habits:
        if re.search(r'\b' + w + r'\b', text, re.IGNORECASE):
            found.add(w.capitalize())
    if found:
        return ", ".join(sorted(found))
    return None

def parse_type(text, name):
    # Determine type based on name or text
    if 'acer ' in name.lower():
        return "Maple"
    if 'abies ' in name.lower():
        return "Fir"
    if "maple" in text.lower():
        return "Maple"
    if "fir" in text.lower():
        return "Fir"
    return None

def extract_name_from_h1(h):
    # Try extracting from green-colored span first
    color_spans = h.find_all('span', style=re.compile(r"color:\s*#38761d", re.IGNORECASE))
    for cspan in color_spans:
        line_text = cspan.get_text(" ", strip=True)
        if 'Acer ' in line_text or 'Abies ' in line_text:
            return line_text

    text = h.get_text(" ", strip=True)
    if 'Acer ' in text or 'Abies ' in text:
        return text
    return None

def process_tree_data(tree_blocks):
    html = "\n".join(tree_blocks)
    soup = BeautifulSoup(html, 'html.parser')

    data = {field: None for field in FIELDS}

    # Extract the Name
    h1_tags = soup.find_all('h1')
    for h in h1_tags:
        name_candidate = extract_name_from_h1(h)
        if name_candidate:
            data['Name'] = name_candidate
            break

    # Gather text from multiple tags
    # Zones may appear in h2 or directly in text lines
    text_content = []
    for tag in soup.find_all(['h1', 'h2', 'h4', 'p']):
        line = tag.get_text(" ", strip=True)
        if line:
            text_content.append(line)

    full_text = " ".join(text_content)

    if data['Name']:
        data['Type'] = parse_type(full_text, data['Name'])
    data['Zones'] = parse_zones(full_text) or data['Zones']
    data['Fall Color'] = parse_fall_color(full_text) or data['Fall Color']
    data['Average Height After 10 YR'] = parse_height_10yr(full_text) or data['Average Height After 10 YR']
    data['Growth Rate'] = parse_growth_rate(full_text) or data['Growth Rate']
    data['Spring Color'] = parse_spring_color(full_text) or data['Spring Color']
    data['Growth Habit'] = parse_growth_habit(full_text) or data['Growth Habit']

    return data

def main():
    input_file = "data.html"  # Your input file
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    records = []
    current_tree = []
    for line in lines:
        # Identify start of a new tree by h1 line with Acer or Abies
        if "<h1" in line and ("Acer " in line or "Abies " in line):
            if current_tree:
                data = process_tree_data(current_tree)
                if data['Name']:
                    records.append(data)
                current_tree = []
        current_tree.append(line)

    # Last tree
    if current_tree:
        data = process_tree_data(current_tree)
        if data['Name']:
            records.append(data)

    # Write to CSV
    with open('trees_extracted.csv', 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=FIELDS)
        writer.writeheader()
        for r in records:
            writer.writerow(r)

    print("Extraction complete. Check trees_extracted.csv for results.")

if __name__ == "__main__":
    main()
