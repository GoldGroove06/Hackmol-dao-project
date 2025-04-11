import React from 'react';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const navbar = () => {
  return (
    <div>
  {/* <!-- navbar starts --> */}
  <nav className="fixed w-full bg-gray-900/80 backdrop-blur-xl border-b border-gray-800 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="22.5" viewBox="0 0 576 512"><path fill="#ffffff" d="M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5l0 112.2c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7L0 413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3l0-119.1c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3l0-112.2c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2 0-89.2L392 121l0 89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4l0-100.5L256 323.2l0 95.9-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1 0-100.5L528 323.2l0 90.7c0 3.2-1.9 6-4.8 7.3z"/></svg>
          </div>
          <span className="text-white font-bold text-xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">DAO</span>
        </div>

        {/* <!-- Desktop Menu --> */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-white hover:text-cyan-400 transition-colors font-medium group">
            Home
            <div className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
          <a href="/organisations" className="text-white hover:text-cyan-400 transition-colors font-medium group">
            Organisations
            <div className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
          <a href="#about" className="text-white hover:text-cyan-400 transition-colors font-medium group">
            About
            <div className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
          <a href="contact" className="text-white hover:text-cyan-400 transition-colors font-medium group">
            Contact 
            <div className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
          
          <div className="flex items-center space-x-4 ml-4">
            <button className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
              <span className="relative z-10 flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white rounded-full border border-gray-700 group-hover:border-transparent transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20.5" className='mr-2' viewBox="0 0 512 512"><path fill="#ffffff" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg> Connect Wallet
              </span>
            </button>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        {/* <!-- Mobile Menu Button --> */}
        <button id="menuBtn" className="md:hidden text-white hover:text-cyan-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>
    {/* <!-- Mobile Menu --> */}
    <div id="mobileMenu" className="hidden md:hidden absolute w-full bg-gray-900/95 backdrop-blur-lg border-b border-gray-800">
      <div className="px-2 py-3 space-y-3">
        <a href="#" className="block text-white px-4 py-3 hover:bg-gray-800/50 rounded-lg transition">Home</a>
        <a href="#ourproduct" className="block text-white px-4 py-3 hover:bg-gray-800/50 rounded-lg transition">Products</a>
        <a href="#" className="block text-white px-4 py-3 hover:bg-gray-800/50 rounded-lg transition">About</a>
        <a href="#contactus" className="block text-white px-4 py-3 hover:bg-gray-800/50 rounded-lg transition">Contact</a>
        
      </div>
    </div>
    
  </nav>
</div>
  )
}

export default navbar
