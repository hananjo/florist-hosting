export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
        {/* Header/Navigation  */}
        <header className="border-b border-gray-200">
          <nav className="max-w-6x1 mx-auto px-4 py-6 flex justify-between items-center">
            <div className="text-2xl font-bold text-black">Bloom & Co</div>
            <ul className="flex gap-8 text-sm font-medium">
              <li><a href="home" className="text-black hover:text-gray-500">Home</a></li>
              <li><a href="gallery" className="text-black hover:text-gray-500">Gallery</a></li>
              <li><a href="about" className="text-black hover:text-gray-500">About</a></li>
              <li><a href="contact" className="text-black hover:text-gray-500">Contact</a></li>
            </ul>
          </nav>
        </header>
    </div>
  )
}