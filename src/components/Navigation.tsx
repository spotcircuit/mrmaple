import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="/">
            <Image
              src="/images/MrMaple_5471acf2-acab-419d-8382-d3dac32ded55_679x234.webpv1677529898"
              alt="Mr. Maple Logo"
              width={200}
              height={69}
              priority
            />
          </a>
        </div>
        
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Japanese Maple..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <i className="fas fa-search text-gray-500"></i>
            </button>
          </div>
        </div>

        <div className="flex space-x-6">
          <button className="hover:text-primary">
            Shop By Category <i className="fas fa-chevron-down ml-1"></i>
          </button>
        </div>
      </div>
    </nav>
  )
}
