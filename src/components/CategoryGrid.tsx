import Image from 'next/image'

const categories = [
  // Row 1: Japanese Maples (2x2) + 4 small cards
  {
    title: "Japanese Maple Trees",
    image: {
      small: "/images/categories/japanese-maple-red-leaf-small.webp",
      medium: "/images/categories/japanese-maple-red-leaf-medium.webp",
      large: "/images/categories/japanese-maple-red-leaf-large.webp"
    },
    link: "/collections/japanese-maple-trees",
    size: "large" // 2x2
  },
  {
    title: "Azaleas",
    image: {
      small: "/images/categories/azalea-pink-bloom.webp",
      medium: "/images/categories/azalea-pink-bloom.webp",
      large: "/images/categories/azalea-pink-bloom.webp"
    },
    link: "/collections/azaleas",
    size: "small"
  },
  {
    title: "Conifers",
    image: {
      small: "/images/categories/conifer-blue-spruce.webp",
      medium: "/images/categories/conifer-blue-spruce.webp",
      large: "/images/categories/conifer-blue-spruce.webp"
    },
    link: "/collections/conifers",
    size: "small"
  },
  {
    title: "Dogwoods",
    image: {
      small: "/images/categories/dogwood-white-bloom.webp",
      medium: "/images/categories/dogwood-white-bloom.webp",
      large: "/images/categories/dogwood-white-bloom.webp"
    },
    link: "/collections/dogwoods",
    size: "small"
  },
  {
    title: "Hydrangea",
    image: {
      small: "/images/categories/hydrangea-blue.webp",
      medium: "/images/categories/hydrangea-blue.webp",
      large: "/images/categories/hydrangea-blue.webp"
    },
    link: "/collections/hydrangea",
    size: "small"
  },

  // Row 2: Ginkgo (1) + Redbuds (1) + Rare Plants (2) + All Available (2)
  {
    title: "Ginkgo Trees",
    image: {
      small: "/images/categories/ginkgo-fall.webp",
      medium: "/images/categories/ginkgo-fall.webp",
      large: "/images/categories/ginkgo-fall.webp"
    },
    link: "/collections/ginkgo-trees",
    size: "small"
  },
  {
    title: "Redbuds",
    image: {
      small: "/images/categories/redbud-spring.webp",
      medium: "/images/categories/redbud-spring.webp",
      large: "/images/categories/redbud-spring.webp"
    },
    link: "/collections/redbuds",
    size: "small"
  },
  {
    title: "Rare Plants",
    image: {
      small: "/images/categories/rare-japanese-maple.webp",
      medium: "/images/categories/rare-japanese-maple.webp",
      large: "/images/categories/rare-japanese-maple.webp"
    },
    link: "/collections/rare-plants",
    size: "medium"
  },
  {
    title: "All Available Plants",
    image: {
      small: "/images/categories/nursery-overview.webp",
      medium: "/images/categories/nursery-overview.webp",
      large: "/images/categories/nursery-overview.webp"
    },
    link: "/collections/all-available-plants",
    size: "medium"
  },

  // Row 3: New Weekly (2) + Gift Cards (1) + Merch (1) + Empty (2)
  {
    title: "New Weekly Selection",
    image: {
      small: "/images/categories/weekly-featured.webp",
      medium: "/images/categories/weekly-featured.webp",
      large: "/images/categories/weekly-featured.webp"
    },
    link: "/collections/new-weekly-selection",
    size: "medium" // 2 cols
  },
  {
    title: "Gift Cards",
    image: {
      small: "/images/categories/gift-card-display.webp",
      medium: "/images/categories/gift-card-display.webp",
      large: "/images/categories/gift-card-display.webp"
    },
    link: "/gift-cards",
    size: "small" // 1 col
  },
  {
    title: "Hats & T-Shirts",
    image: {
      small: "/images/categories/merch-collection.webp",
      medium: "/images/categories/merch-collection.webp",
      large: "/images/categories/merch-collection.webp"
    },
    link: "/collections/merchandise",
    size: "small" // 1 col
  }
]

export default function CategoryGrid() {
  return (
    <section className="py-12">
      <div className="container-wide">
        <div className="grid grid-cols-6 gap-3 auto-rows-[180px]">
          {categories.map((category, index) => (
            <a 
              href={category.link}
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105
                ${category.size === 'large' ? 'col-span-2 row-span-2' : ''}
                ${category.size === 'large-wide' ? 'col-span-4' : ''}
                ${category.size === 'medium' ? 'col-span-2' : ''}
                ${category.size === 'small' ? 'col-span-1' : ''}`}
            >
              <div className="relative w-full h-full">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={category.image.large}
                    type="image/webp"
                  />
                  <source
                    media="(min-width: 640px)"
                    srcSet={category.image.medium}
                    type="image/webp"
                  />
                  <Image
                    src={category.image.small}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes={`
                      (min-width: 1024px) ${category.size === 'large' ? '33.33vw' : '16.67vw'},
                      (min-width: 640px) ${category.size === 'large' ? '50vw' : '25vw'},
                      100vw
                    `}
                    priority={index < 6}
                  />
                </picture>
                <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className={`text-white font-semibold
                      ${category.size === 'large' ? 'text-2xl md:text-3xl' : ''}
                      ${category.size === 'large-wide' ? 'text-xl md:text-2xl' : ''}
                      ${category.size === 'medium' ? 'text-lg md:text-xl' : ''}
                      ${category.size === 'small' ? 'text-base md:text-lg' : ''}`}>
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
