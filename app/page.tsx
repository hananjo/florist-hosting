export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
        {/* Header/Navigation  */}
        <header className="border-b border-gray-200">
          <nav className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
            <div className="text-2xl font-bold text-black">Bloom & Co</div>
            <ul className="flex gap-8 text-sm font-medium">
              <li><a href="#home" className="text-black hover:text-gray-500">Home</a></li>
              <li><a href="#gallery" className="text-black hover:text-gray-500">Gallery</a></li>
              <li><a href="#about" className="text-black hover:text-gray-500">About</a></li>
              <li><a href="#contact" className="text-black hover:text-gray-500">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-20 text-center">
          <img
            src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=1200&h=600&fit=crop"
            alt="Fresh flowers"
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          <h1 className="text-5xl font-bold text-black mb-4">Fresh Flowers, Delivered</h1>
          <p className="text-lg text-gray-600 mb-8">Beautiful arrangements made fresh every week</p>
          <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800">
            Order Now
          </button>
        </section>
    </div>
  )
}