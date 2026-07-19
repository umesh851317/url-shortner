import { useState } from 'react'
import { Copy, BarChart3 } from "lucide-react";
import axios from "axios"
import Loader from '../components/animation/Loader';

const Create = () => {
       const [url, setUrl] = useState("https://www.google.com");
       const [shortUrl, setShortUrl] = useState(null);
       const [openLoader, setLoader] = useState(false)

       const handleGenrate = async (e) => {
              e.preventDefault();
              console.log("original url is ", url);
              setLoader(true)
              try {
                     if (url == "") {
                            console.log("url can't be empty");

                     } else {
                            var response = await axios.post("http://localhost:8000/url", {
                                   url: url
                            })
                            setShortUrl(response.data)
                     }
                     console.log("short url is ", response);
              } catch (error) {
                     console.log(error);
              }
              finally {
                     setUrl("")
                     setLoader(false)
              }
       }
       return (
              <div className="min-h-full bg-gray-950 text-white ">
                     <div className="mx-auto flex max-w-6xl flex-col items-center py-10 ">
                            <div className=" w-full max-w-3xl rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-xl">

                                   <label className="mb-3 block font-medium text-gray-300">
                                          Enter your long URL
                                   </label>

                                   <form onSubmit={handleGenrate} className="flex gap-4">
                                          <input
                                                 type="text"
                                                 placeholder="https://example.com/very/long/url"
                                                 value={url}
                                                 onChange={(e) => setUrl(e.target.value)}
                                                 className="flex-1 rounded-xl border border-gray-700 bg-gray-950 px-5 py-4 text-white outline-none "
                                          />

                                          <button type='submit'
                                                 className="rounded-xl bg-cyan-500 px-8 font-semibold transition hover:bg-cyan-600">
                                                 Generate
                                          </button>
                                   </form>

                                   {openLoader && (<Loader></Loader>)}
                                   {shortUrl?.duplicate && (
                                          <div className="mt-5 rounded-lg border border-green-700 bg-green-900/20 p-4 text-green-400">
                                                 ✓ This URL already exists. Showing the existing short link.
                                          </div>
                                   )}


                                   {!openLoader &&
                                          (shortUrl ? (
                                                 <div className="mt-8 rounded-xl border border-gray-800 bg-gray-950 p-6">
                                                        <h2 className="mb-5 text-xl font-semibold">Your Short URL</h2>

                                                        <p className="text-sm text-gray-500">Original URL</p>
                                                        <p className="mb-4 break-all text-gray-300">
                                                               {shortUrl.redirectUrl}
                                                        </p>

                                                        <p className="text-sm text-gray-500">Short URL</p>

                                                        <div className="mt-2 flex items-center justify-between rounded-lg border border-gray-700 bg-gray-900 p-4">
                                                               <span href={`http://localhost:8000/${shortUrl.shortId}`}
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                                      className="font-medium text-cyan-400">
                                                                      {`http://localhost:8000/${shortUrl.shortId}`}
                                                               </span>

                                                               <div className="flex gap-3">
                                                                      <button type='' className="rounded-lg bg-cyan-500 p-3 hover:bg-cyan-600">
                                                                             <Copy size={18} />
                                                                      </button>

                                                                      <button className="rounded-lg bg-gray-800 p-3 hover:bg-gray-700">
                                                                             <BarChart3 size={18} />
                                                                      </button>
                                                               </div>
                                                        </div>
                                                        <div className='w-full text-center mt-8' >
                                                               <a href={`http://localhost:8000/${shortUrl.shortId}`}
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                                      className="rounded-xl bg-cyan-500 px-8 py-3 font-medium  transition hover:bg-cyan-600">
                                                                      redirect
                                                               </a>
                                                        </div>
                                                 </div>
                                          ) : (
                                                 <div className="mt-8 rounded-xl border border-gray-800 bg-gray-950 p-6 text-center text-gray-500">
                                                        No short URL generated yet.
                                                 </div>
                                          ))
                                   }

                                   {shortUrl?.errMsg && (
                                          <div className="mt-5 rounded-lg border border-red-700 bg-green-900/20 p-4 text-red-400">
                                                 ✓ This URL already exists. Showing the existing short link.
                                          </div>
                                   )}
                            </div>


                     </div>
              </div>
       );
}

export default Create
