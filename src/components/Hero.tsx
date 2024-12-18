'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Hero() {
  const slides = [
    {
      image: "/images/NorthlakeBeauty-04032024-2_2166a549-1e9a-4201-bab1-a5a54237b76b_2000x1334.jpgv1718304158",
      title: "Premium Japanese Maples",
      subtitle: "Discover our curated collection of rare and beautiful Japanese Maples"
    },
    {
      image: "/images/NorthlakeBeauty-04032024-2_2166a549-1e9a-4201-bab1-a5a54237b76b_2000x1334.jpgv1718304158",
      title: "Expert Care Guidance",
      subtitle: "Learn how to care for your Japanese Maples with our expert tips"
    },
    {
      image: "/images/NorthlakeBeauty-04032024-2_2166a549-1e9a-4201-bab1-a5a54237b76b_2000x1334.jpgv1718304158",
      title: "Rare Varieties Available",
      subtitle: "Explore our selection of rare and unique Japanese Maple varieties"
    }
  ]

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="relative h-[600px] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay" />
              <div className="hero-content">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl">
                  {slide.subtitle}
                </p>
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-colors text-lg">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
