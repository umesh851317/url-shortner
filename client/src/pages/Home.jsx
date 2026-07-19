import React, { useState } from "react";
import { Link2, Copy, BarChart3, Zap, ShieldCheck, RefreshCw, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
       return (
              <div className="min-h-full bg-gray-950 text-white">
                     <div className=" flex gap-15 max-w-6xl flex-col items-center pt-15 ">

                            {/* Hero */}
                            <div className="text-center">
                                   <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20">
                                          <Link2 className="h-8 w-8 text-cyan-400" />
                                   </div>

                                   <h1 className="text-5xl font-bold">
                                          Shorten Your URLs
                                   </h1>

                                   <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
                                          Convert long URLs into short, shareable links with analytics and
                                          duplicate URL detection.
                                   </p>
                            </div>

                            {/* URL Card */}
                            <div className="w-full max-w-48 rounded-2xl text-center ">
                                   <Link
                                          to="/create"
                                          className="flex items-center text-center gap-2 rounded-xl bg-cyan-500 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-cyan-600 hover:scale-105"
                                   >
                                          Get Started
                                          <ArrowRight size={20} />
                                   </Link>
                            </div>

                            {/* Features */}

                            <div className="grid w-full max-w-6xl gap-6 md:grid-cols-3">

                                   <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center">
                                          <Zap className="mx-auto mb-4 text-yellow-400" size={40} />
                                          <h3 className="text-xl font-semibold">Fast</h3>
                                          <p className="mt-2 text-gray-400">
                                                 Generate short URLs instantly.
                                          </p>
                                   </div>

                                   <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center">
                                          <BarChart3 className="mx-auto mb-4 text-cyan-400" size={40} />
                                          <h3 className="text-xl font-semibold">Analytics</h3>
                                          <p className="mt-2 text-gray-400">
                                                 Track clicks and monitor usage.
                                          </p>
                                   </div>

                                   <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center">
                                          <ShieldCheck className="mx-auto mb-4 text-green-400" size={40} />
                                          <h3 className="text-xl font-semibold">Duplicate Detection</h3>
                                          <p className="mt-2 text-gray-400">
                                                 Existing URLs return the same short link.
                                          </p>
                                   </div>

                            </div>

                     </div>
              </div>
       );
};

export default Home;