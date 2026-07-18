import { LoaderCircle, Link2, ArrowUpRight } from "lucide-react";

export default function Redirect() {
       return (
              // <div className="flex min-h-screen items-center justify-center bg-gray-950 px-6">
              //        <div className="w-full max-w-md rounded-3xl border border-gray-800 bg-gray-900 p-10 text-center shadow-xl">

              //               <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10">
              //                      <Link2 className="h-10 w-10 text-cyan-400" />
              //               </div>

              //               <LoaderCircle className="mx-auto mt-8 h-10 w-10 animate-spin text-cyan-400" />

              //               <h1 className="mt-6 text-3xl font-bold text-white">
              //                      Redirecting...
              //               </h1>

              //               <p className="mt-3 text-gray-400">
              //                      Please wait while we take you to your destination.
              //               </p>

              //               <div className="mt-8 rounded-xl border border-gray-800 bg-gray-950 p-4">
              //                      <p className="text-sm text-gray-500">
              //                             Short ID
              //                      </p>

              //                      <p className="mt-1 font-semibold text-cyan-400">
              //                             abc123
              //                      </p>
              //               </div>

              //        </div>
              // </div>

              <div className="flex min-h-screen items-center justify-center bg-gray-950 px-6">
                     <div className="max-w-md rounded-3xl border border-red-800 bg-gray-900 p-10 text-center">

                            <h1 className="text-6xl font-bold text-red-500">
                                   404
                            </h1>

                            <h2 className="mt-4 text-2xl font-semibold text-white">
                                   Link Not Found
                            </h2>

                            <p className="mt-3 text-gray-400">
                                   This short URL doesn't exist or has expired.
                            </p>

                            <button className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600">
                                   Back to Home
                            </button>

                     </div>
              </div>
       );
}