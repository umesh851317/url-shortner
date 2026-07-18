import React, { useState } from "react";
import { Link2, Copy, BarChart3, Zap, ShieldCheck, RefreshCw } from "lucide-react";

const Home = () => {
       const [url, setUrl] = useState("");
       const [shortUrl, setShortUrl] = useState("https://short.ly/abc123");
       const [isDuplicate] = useState(true);

       return (
              <div className="min-h-screen bg-gray-950 text-white">
                     <div className="mx-auto flex max-w-6xl flex-col items-center py-20">

                            {/* Hero */}
                            <div className="mb-12 text-center">
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
                            <div className="w-full max-w-3xl rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-xl">

                                   <label className="mb-3 block font-medium text-gray-300">
                                          Enter your long URL
                                   </label>

                                   <div className="flex gap-4">
                                          <input
                                                 type="text"
                                                 placeholder="https://example.com/very/long/url"
                                                 value={url}
                                                 onChange={(e) => setUrl(e.target.value)}
                                                 className="flex-1 rounded-xl border border-gray-700 bg-gray-950 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-500"
                                          />

                                          <button className="rounded-xl bg-cyan-500 px-8 font-semibold transition hover:bg-cyan-600">
                                                 Generate
                                          </button>
                                   </div>


                                   {isDuplicate && (
                                          <div className="mt-5 rounded-lg border border-green-700 bg-green-900/20 p-4 text-green-400">
                                                 ✓ This URL already exists. Showing the existing short link.
                                          </div>
                                   )}


                                   <div className="mt-8 rounded-xl border border-gray-800 bg-gray-950 p-6">

                                          <h2 className="mb-5 text-xl font-semibold">
                                                 Your Short URL
                                          </h2>

                                          <div className="mb-5">
                                                 <p className="text-sm text-gray-500">Original URL</p>
                                                 <p className="mt-1 break-all text-gray-300">
                                                        {url || "https://example.com/very/long/url"}
                                                 </p>
                                          </div>

                                          <div>
                                                 <p className="text-sm text-gray-500">Short URL</p>

                                                 <div className="mt-2 flex items-center justify-between rounded-lg border border-gray-700 bg-gray-900 p-4">

                                                        <span className="font-medium text-cyan-400">
                                                               {shortUrl}
                                                        </span>

                                                        <div className="flex gap-3">

                                                               <button className="rounded-lg bg-cyan-500 p-3 transition hover:bg-cyan-600">
                                                                      <Copy size={18} />
                                                               </button>

                                                               <button className="rounded-lg bg-gray-800 p-3 transition hover:bg-gray-700">
                                                                      <BarChart3 size={18} />
                                                               </button>

                                                        </div>

                                                 </div>
                                          </div>

                                   </div>

                            </div>

                            {/* Features */}

                            <div className="mt-20 grid w-full max-w-6xl gap-6 md:grid-cols-3">

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