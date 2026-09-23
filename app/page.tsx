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

        {/* Gallery Section */}
        <section id="gallery" className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Our Arrangements</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Arrangement Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23e5e7eb' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%23999' text-anchor='middle' dy='.3em'%3ESunset Romance%3C/text%3E%3C/svg%3E" alt="Sunset Romance" className="w-full h-64 object-cover"/>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <h3 className="text-xl font-bold text-black mb-2">Sunset Romance</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1"> Roses, dahlias, and eucalyptus</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-black">$75</span>
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Add</button>
                </div>
              </div>
            </div>

            {/* Arrangement Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23e5e7eb' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%23999' text-anchor='middle' dy='.3em'%3ESunset Romance%3C/text%3E%3C/svg%3E" alt="Sunset Romance" className="w-full h-64 object-cover"/>
               <div className="p-6 flex flex-col flex-1 justify-between">
                <h3 className="text-xl font-bold text-black mb-2">Garden Dream</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1"> Hydrangeas, roses, and greenery</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-black">$85</span>
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Add</button>
                </div>
              </div>
            </div>

          {/* Arrangement Card 3 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23e5e7eb' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%23999' text-anchor='middle' dy='.3em'%3ESunset Romance%3C/text%3E%3C/svg%3E" alt="Sunset Romance" className="w-full h-64 object-cover"/>
            <div className="p-6 flex flex-col flex-1 justify-between">
              <h3 className="text-xl font-bold text-black mb-2">Spring Bliss</h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">Tulips, lilies, and carnations</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-black">$65</span>
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Add</button>
              </div>
            </div>
          </div>

  {/* Arrangement Card 4 */}
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23e5e7eb' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%23999' text-anchor='middle' dy='.3em'%3ESunset Romance%3C/text%3E%3C/svg%3E" alt="Sunset Romance" className="w-full h-64 object-cover"/>
            <div className="p-6 flex flex-col flex-1 justify-between">
              <h3 className="text-xl font-bold text-black mb-2">Tropical Paradise</h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">Birds of paradise, anthurium, heliconia</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-black">$95</span>
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Add</button>
              </div>
            </div>
          </div>


            {/* Arrangement Card 5 */}
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23e5e7eb' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%23999' text-anchor='middle' dy='.3em'%3ESunset Romance%3C/text%3E%3C/svg%3E" alt="Sunset Romance" className="w-full h-64 object-cover"/>
            <div className="p-6 flex flex-col flex-1 justify-between">
              <h3 className="text-xl font-bold text-black mb-2">Elegant White</h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">White roses, peonies, and baby's breath</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-black">$150</span>
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Add</button>
              </div>
            </div>
          </div>

           {/* Arrangement Card 6 */}
           <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23e5e7eb' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%23999' text-anchor='middle' dy='.3em'%3ESunset Romance%3C/text%3E%3C/svg%3E" alt="Sunset Romance" className="w-full h-64 object-cover"/>
            <div className="p-6 flex flex-col flex-1 justify-between">
              <h3 className="text-xl font-bold text-black mb-2">Wildflower Mix</h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">Sunflowers, daisies, and zinnia</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-black">$70</span>
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Add</button>
              </div>
            </div>
          </div>


          </div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">About Bloom & Co</h2>
              <p className="text-lg text-gray-600 mb-4">
                At Bloom & Co, we believe flowers tell a story. Every arrangement is carefully crafted with passion and attention to detail, using only the freshest blooms sourced from local and sustainable growers.
              </p>
              <p className='text-lg text-gray-600 mb-4'>
                With over 15 years of experience in floristry, our team is dedicated to creating beautiful moments for your special occasions. Whether it's a birthday, anniversary, or just because, we're here to make your day more beautiful.
              </p>
              <p className='text-lg text-gray-600'>
                We offer weekly arrangements delivered fresh to your door, custom designs for special events, and wedding floristry services. Let us bring nature's beauty into your life.
              </p>
            </div>

            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Florist Photo Here</span>
            </div>

          </div>
        </section>
    </div>
  )
}