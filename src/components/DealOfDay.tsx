'use client'
import Image from 'next/image'
import Countdown from 'react-countdown'

export default function DealOfDay() {
  // This can be switched to fetch from Shopify API later
  const dealProduct = {
    title: "Acer palmatum 'Ruby Stars'",
    price: 149.99,
    originalPrice: 199.99,
    image: "/images/NorthlakeBeauty-04032024-2_2166a549-1e9a-4201-bab1-a5a54237b76b_2000x1334.jpgv1718304158",
    description: "A stunning Japanese maple variety with deep red foliage",
    endTime: Date.now() + 86400000 // 24 hours from now
  }

  const renderer = ({ hours, minutes, seconds }) => (
    <div className="deal-timer">
      <div className="timer-block">
        {hours.toString().padStart(2, '0')}h
      </div>
      <div className="timer-block">
        {minutes.toString().padStart(2, '0')}m
      </div>
      <div className="timer-block">
        {seconds.toString().padStart(2, '0')}s
      </div>
    </div>
  )

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Shop By Category */}
          <div className="category-section">
            <h2 className="text-2xl font-bold mb-6">Shop By Category</h2>
            <div className="category-list">
              <a href="#" className="category-item">
                <span>Japanese Maple Types</span>
                <i className="fas fa-chevron-right"></i>
              </a>
              <a href="#" className="category-item">
                <span>Dwarf Japanese Maples</span>
                <i className="fas fa-chevron-right"></i>
              </a>
              <a href="#" className="category-item">
                <span>Weeping Japanese Maples</span>
                <i className="fas fa-chevron-right"></i>
              </a>
              <a href="#" className="category-item">
                <span>Red Japanese Maples</span>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>

          {/* Deal of the Day */}
          <div className="deal-section lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold">Deal of the Day</h2>
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    Save 25%
                  </span>
                </div>
                
                <Countdown date={dealProduct.endTime} renderer={renderer} />
                
                <h3 className="text-2xl font-semibold mb-2">{dealProduct.title}</h3>
                <p className="text-gray-600 mb-4">{dealProduct.description}</p>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-primary">
                    ${dealProduct.price}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    ${dealProduct.originalPrice}
                  </span>
                </div>

                <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors w-fit">
                  Shop Now
                </button>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={dealProduct.image}
                  alt={dealProduct.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
