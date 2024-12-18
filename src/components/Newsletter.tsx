export default function Newsletter() {
  return (
    <section className="newsletter bg-accent py-16">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button 
              type="submit"
              className="bg-primary text-white px-8 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
