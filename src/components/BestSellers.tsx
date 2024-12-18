import Image from 'next/image'

export default function BestSellers() {
  // This can be switched to fetch from Shopify API later
  const products = [
    {
      id: 1,
      title: "Acer palmatum 'Bloodgood'",
      price: 129.99,
      image: "/images/NorthlakeBeauty-04032024-2_2166a549-1e9a-4201-bab1-a5a54237b76b_2000x1334.jpgv1718304158",
    },
    {
      id: 2,
      title: "Acer palmatum 'Emperor 1'",
      price: 139.99,
      image: "/images/NorthlakeBeauty-04032024-2_2166a549-1e9a-4201-bab1-a5a54237b76b_2000x1334.jpgv1718304158",
    },
    {
      id: 3,
      title: "Acer palmatum 'Katsura'",
      price: 149.99,
      image: "/images/NorthlakeBeauty-04032024-2_2166a549-1e9a-4201-bab1-a5a54237b76b_2000x1334.jpgv1718304158",
    },
  ]

  return (
    <section className="best-sellers py-12">
      <div className="container">
        <div className="section-header mb-8">
          <h2 className="text-3xl font-bold text-center">Best Sellers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="relative h-[300px] mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-primary font-bold">${product.price}</p>
              <button className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
