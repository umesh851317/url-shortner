import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
       return (
              <nav className="fixed top-0 left-0 z-50 h-[9vh] w-full border-b border-gray-800 bg-black/90 backdrop-blur-md shadow-lg">
                     <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">

                            {/* Logo */}
                            <Link to="/" className="text-2xl font-bold text-cyan-400">
                                   URL Shortener
                            </Link>

                            {/* Navigation Links */}
                            <div className="flex items-center gap-8 font-medium text-gray-300">
                                   <Link
                                          to="/create"
                                          className="transition-colors duration-200 hover:text-cyan-400"
                                   >
                                          Create
                                   </Link>


                                   <Link
                                          to="/analytics"
                                          className="transition-colors duration-200 hover:text-cyan-400"
                                   >
                                          History
                                   </Link>
                            </div>

                            {/* User */}
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-white font-semibold shadow-md">
                                   U
                            </div>

                     </div>
              </nav>
       )
}

export default Nav
