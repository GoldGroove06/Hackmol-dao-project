import Image from "next/image";
import './landing.css';

export default function Home() {
  return (
    <div>
     {/* <!-- Hero Section --> */}
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500">Decentralized</span>
              <br/>Autonomous Organization
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Building the future of decentralized governance and community-driven ecosystems on the blockchain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                <span className="relative z-10 flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white rounded-lg border border-gray-700 group-hover:border-transparent transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" className="mr-2" viewBox="0 0 512 512"><path fill="#ffffff" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg><a href="organisations"> Launch</a>
                </span>
              </button>
              <button className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                <span className="relative z-10 flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white rounded-lg border border-gray-700 group-hover:border-transparent transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" className="mr-2" viewBox="0 0 448 512"><path fill="#fcfcfc" d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg> Documentation
                </span>
              </button>
            </div>
            
              
          </div>
          
          {/* <!-- Animation Container --> */}
          <div className="w-full md:w-1/2 h-auto flex items-center justify-center mt-16 ">
            <div className="anime wrapper">
              <div className="container1">
                <div className="wall">
                  <div className="surface1"></div>
                  <div className="surface1"></div>
                  <div className="left1"></div>
                  <div className="top1"></div>
                </div>
                <div className="wall">
                  <div className="surface1"></div>
                  <div className="surface1"></div>
                  <div className="left1"></div>
                  <div className="top1"></div>
                </div>
                <div className="wall">
                  <div className="surface1"></div>
                  <div className="surface1"></div>
                  <div className="left1"></div>
                  <div className="top1"></div>
                </div>
                <div className="wall">
                  <div className="surface1"></div>
                  <div className="surface1"></div>
                  <div className="left1"></div>
                  <div className="top1"></div>
                </div>
                <div className="wall">
                  <div className="surface1"></div>
                  <div className="surface1"></div>
                  <div className="left1"></div>
                  <div className="top1"></div>
                </div>
                <div className="wall">
                  <div className="surface1"></div>
                  <div className="surface1"></div>
                  <div className="left1"></div>
                  <div className="top1"></div>
                </div>
                <div className="ball1-container1">
                  <div className="ball1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

 {/* Stats Section */}
 <section className="py-16 bg-gradient-to-r from-gray-900/50 via-gray-900/20 to-gray-900/50 border-y border-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800 backdrop-blur-sm">
        <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 mb-2">10K+</div>
        <div className="text-gray-300">Community Members</div>
      </div>
      <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800 backdrop-blur-sm">
        <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-2">$25M+</div>
        <div className="text-gray-300">Treasury Value</div>
      </div>
      <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800 backdrop-blur-sm">
        <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">150+</div>
        <div className="text-gray-300">Active Proposals</div>
      </div>
      <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800 backdrop-blur-sm">
        <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 mb-2">42</div>
        <div className="text-gray-300">Projects Funded</div>
      </div>
    </div>
  </div>
</section>

    {/* <!-- PRODUCT GRID STARTS --> */}
   
<section className="py-20" id="about" name="about">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">How it Works?</span>
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
      Discover how we're building a sustainable ecosystem for open source, one step at a time.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* <!-- Product Card 1 --> */}
      <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative p-6">
          <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-white text-xl" width="25" height="20" viewBox="0 0 576 512"><path fill="#ffffff" d="M96 80c0-26.5 21.5-48 48-48l288 0c26.5 0 48 21.5 48 48l0 304L96 384 96 80zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48l16 0 0 128 448 0 0-128 16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-96z"/></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Create Your Community</h3>
          <p className="text-gray-400 mb-6">
          Establish a DAO  or join DAO with members who share a specific interest or focus within the open-source ecosystem.
          </p>
          <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500/10 text-purple-500">
  <svg xmlns="http://www.w3.org/2000/svg" className="mr-1" width="14" height="14" viewBox="0 0 448 512">
    <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
  </svg> Create
</span>
            <button className="text-cyan-500 hover:text-white transition-colors flex items-center">
              Explore <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" height="20" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Product Card 2 --> */}
      <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative p-6">
          <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-white text-xl" height="28" width="25" viewBox="0 0 512 512"><path fill="#ffffff" d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2c0 0 0 0 0 0s0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4l0 3.4 0 5.7 0 26.3zm32 96l0-32 0-25.9c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 44.2-86 80-192 80S0 476.2 0 432l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"/></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Define Your Funding Rules</h3>
          <p className="text-gray-400 mb-6">
          Provide a platform for projects to directly engage with a relevant and supportive funding community.
          </p>
          <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-500">
  <span className="mr-1"><strong>$</strong></span>
  Fund
</span>           <button className="text-cyan-500 hover:text-white transition-colors flex items-center">
              Explore <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" height="20" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </button>
          </div>
        </div>
      </div>

     

      {/* <!-- Product Card 3 --> */}
      <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative p-6">
          <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-white text-xl" height="20" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Foster Focused Growth</h3>
          <p className="text-gray-400 mb-6">
          Drive funding and development within specific areas of open source that you are passionate about.
          </p>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-500">
              <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" className="mr-1" viewBox="0 0 448 512"><path fill="#ffffff" d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/></svg> Grow
            </span>
            <button className="text-cyan-500 hover:text-white transition-colors flex items-center">
              Explore <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" height="20" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </button>
          </div>
        </div>
      </div>
       {/* <!-- Product Card 4 --> */}
       <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative p-6">
        <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
            
            <svg xmlns="http://www.w3.org/2000/svg" className="text-white text-xl" width="20" height="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M116.7 33.8c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152zm38.5 39.8c-3.3 2.5-4.2 7-2.1 10.5l57.4 95.6L63.3 192c-4.1 .3-7.3 3.8-7.3 8s3.2 7.6 7.3 8l192 16c.4 0 .9 0 1.3 0l192-16c4.1-.3 7.3-3.8 7.3-8s-3.2-7.6-7.3-8L301.5 179.8l57.4-95.6c2.1-3.5 1.2-8.1-2.1-10.5s-7.9-2-10.7 1L256 172.2 165.9 74.6c-2.8-3-7.4-3.4-10.7-1z"/></svg>
</div>
          <h3 className="text-xl font-bold text-white mb-3">Project Proposal</h3>
          <p className="text-gray-400 mb-6">
          Open-source project creators can submit detailed proposals outlining their project goals and funding needs
          </p>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-500/10 text-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" className="mr-1" viewBox="0 0 448 512"><path fill="#ffffff" d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/></svg> Propose
            </span>
            <button className="text-cyan-500 hover:text-white transition-colors flex items-center">
              Explore <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" height="20" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Product Card 5 --> */}
      <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative p-6">
        <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-white text-xl" width="20" height="20" viewBox="0 0 640 512">
              <path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/>
  </svg></div>
          <h3 className="text-xl font-bold text-white mb-3">DAO Member Voting</h3>
          <p className="text-gray-400 mb-6">
          Our DAO members utilize their voting power (typically based on their stake or contribution) to vote on submitted project proposals.
          </p>
          <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-500">
  <svg xmlns="http://www.w3.org/2000/svg" className="mr-1" width="14" height="14" viewBox="0 0 512 512">
    <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69l231.795-231.795c9.997-9.997 26.206-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-14.06 14.059-36.82 14.059-50.88 0z"/>
  </svg> Approved
</span>
            <button className="text-cyan-500 hover:text-white transition-colors flex items-center">
              Explore <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" height="20" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Product Card 6 --> */}
      <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative p-6">
        <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
            
            <svg xmlns="http://www.w3.org/2000/svg" className="text-white text-xl" height="20" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M32 96l320 0 0-64c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-64L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32l-320 0 0 64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64 320 0z"/></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Transparent Disbursement</h3>
          <p className="text-gray-400 mb-6">
          Once a project passes the threshold, the agreed-upon funds are transparently disbursed.
          </p>
          <div className="flex items-center justify-between ">
          <span className="inline-flex items-center mt-3 px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-500">
  <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 " width="14" height="14" viewBox="0 0 576 512">
    <path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zm64-32c-17.7 0-32 14.3-32 32V160H544V128c0-17.7-14.3-32-32-32H64zM544 384V192H32V384c0 17.7 14.3 32 32 32H512c17.7 0 32-14.3 32-32zM96 336a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm48-16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"/>
  </svg>
  Funded
</span>

      <button className="text-cyan-500 hover:text-white transition-colors flex items-center">
              Explore <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" height="20" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </button>
    </div>
  </div>
</div>
</div>
</div>
</section>

{/* <!-- Features Section --> */}
<section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900 border-t border-b border-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Why Choose Our DAO</span>
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        We're building the most advanced decentralized governance platform with cutting-edge features.
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      {/* <!-- Feature 1 --> */}
      <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-purple-600/50 transition-all">
        <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-white text-xl" width="20" height="20" viewBox="0 0 512 512">
            <path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Secure Governance</h3>
        <p className="text-gray-400 mb-4">
          Multi-sig wallets, timelocks, and voting safeguards protect your assets and decisions.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-purple-600 mr-2" width="16" height="16" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
            </svg> Audited smart contracts
          </li>
          <li className="flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-purple-600 mr-2" width="16" height="16" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
            </svg> Role-based permissions
          </li>
          <li className="flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-purple-600 mr-2" width="16" height="16" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
            </svg> Fraud detection
          </li>
        </ul>
      </div>
      
      {/* <!-- Feature 2 --> */}
      <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all">
        <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-white text-xl" width="20" height="20" viewBox="0 0 384 512">
            <path fill="currentColor" d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Community-Powered Funding
        </h3>
        <p className="text-gray-400 mb-4">
        Decisions are made collectively by passionate open-source advocates through a transparent voting process.  
        </p>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 mr-2" width="16" height="16" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
            </svg> Active community participation   
          </li>
          <li className="flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 mr-2" width="16" height="16" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
            </svg>Shared ownership   
          </li>
          <li className="flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 mr-2" width="16" height="16" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
            </svg> Merit-based evaluation
          </li>
        </ul>
      </div>
      
      {/* <!-- Feature 3 --> */}
      <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all">
        <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-white text-xl" width="20" height="20" viewBox="0 0 576 512">
            <path fill="#ffffff" d="M0 80C0 53.5 21.5 32 48 32l96 0c26.5 0 48 21.5 48 48l0 16 192 0 0-16c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-16-192 0 0 16c0 1.7-.1 3.4-.3 5L272 288l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-1.7 .1-3.4 .3-5L144 224l-96 0c-26.5 0-48-21.5-48-48L0 80z"/>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Sustainable Open Source Growth
        </h3>
        <p className="text-gray-400 mb-4">
        Contribute to a long-term funding model that empowers innovation and ensures the longevity of vital open-source projects.   
        </p>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-cyan-500 mr-2" width="16" height="16" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
            </svg> Transparent resource allocation 
          </li>
          <li className="flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-cyan-500 mr-2" width="16" height="16" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
            </svg> Empowering innovation         
          </li>
          <li className="flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-cyan-500 mr-2" width="16" height="16" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
            </svg>Community-driven sustainability
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* <!-- CTA Section --> */}
<section className="py-20 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-gray-900/50 to-blue-500/10 z-0"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="bg-gradient-to-r from-gray-900 to-gray-900/80 rounded-2xl p-8 md:p-12 border border-gray-800 backdrop-blur-sm">
      <div className="md:flex items-center justify-between">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to join the decentralized revolution?</h2>
          <p className="text-lg text-gray-400">
            Become part of our growing community and help shape the future of decentralized governance.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
            <span className="relative z-10 flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white rounded-lg border border-gray-700 group-hover:border-transparent transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="16" height="16" viewBox="0 0 512 512">
                <path fill="currentColor" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
              </svg> <a href="organisations">Launch</a>
            </span>
          </button>
          <button className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
            <span className="relative z-10 flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white rounded-lg border border-gray-700 group-hover:border-transparent transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" className="mr-2" viewBox="0 0 448 512"><path fill="#fcfcfc" d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg> Read Docs
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>

  );
}
