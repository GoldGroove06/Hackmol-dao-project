import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 min-h-screen mt-10">
      <div className="relative overflow-hidden">
        {/* Contact Section */}
        <section className="py-20" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                  Contact Our DAO Team
                </span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Have questions about creating or joining a DAO? Our team is here
                to help.
              </p>
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Send Us a Message
                  </h3>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Elon Musk"
                          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="mypersonal@gmail.com"
                          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white transition-all"
                        required
                      >
                        <option value="">Select a topic</option>
                        <option value="dao-creation">DAO Creation</option>
                        <option value="membership">Membership Questions</option>
                        <option value="technical">Technical Support</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Tell us about your DAO needs..."
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white transition-all"
                        required
                      ></textarea>
                    </div>

                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="relative group bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                        <span className="relative flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          Send Message
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {/* DAO Support Card */}
                <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10 p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        DAO Support
                      </h3>
                    </div>
                    <p className="text-gray-400 mb-6">
                      Get help with DAO creation, governance setup, tokenomics,
                      and technical integration.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-purple-400 mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-gray-300">
                          support@daoplatform.com
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-purple-400 mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span className="text-gray-300">
                          +91 (555) DAO-HELP
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Community Links */}
                <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Join Our Community
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Connect with other DAO creators and members in our
                      community channels.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-400 mr-2"
                          viewBox="0 0 640 512"
                        >
                          <path
                            fill="currentColor"
                            d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                          />
                        </svg>
                        <span className="text-gray-300">Discord</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-400 mr-2"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          />
                        </svg>
                        <span className="text-gray-300">LinkedIn</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-400 mr-2"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          />
                        </svg>
                        <span className="text-gray-300">Twitter</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-400 mr-2"
                          viewBox="0 0 496 512"
                        >
                          <path
                            fill="currentColor"
                            d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-5.9-12.5-18.3-34.1-18.3-68.6 0-63.6 50.6-129.8 151.9-129.8 82.3 0 142.7 58.8 142.7 153.7 0 93.1-51.6 157.9-120.4 157.9-24.2 0-46.9-14.1-54.7-29.3 0 0-13.9 55.8-16.6 66.6-9.7 36.9-36 74-58.2 92.7 1.3.3 2.6.5 3.9.7 48.1 15 98.1 22.5 148.2 22.5 137 0 248-111 248-248z"
                          />
                        </svg>
                        <span className="text-gray-300">Telegram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
