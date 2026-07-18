import React from "react";
import {
       Search,
       MousePointerClick,
       CalendarDays,
       Clock3,
       Link2,
       Copy,
       Globe,
       Monitor,
       Smartphone,
       Tablet,
} from "lucide-react";

const Analytics = () => {
       const stats = [
              {
                     title: "Total Clicks",
                     value: "1,245",
                     icon: <MousePointerClick className="text-cyan-400" size={22} />,
              },
              {
                     title: "Today's Clicks",
                     value: "28",
                     icon: <MousePointerClick className="text-green-400" size={22} />,
              },
              {
                     title: "Created",
                     value: "18 Jul 2026",
                     icon: <CalendarDays className="text-yellow-400" size={22} />,
              },
              {
                     title: "Last Click",
                     value: "2 min ago",
                     icon: <Clock3 className="text-pink-400" size={22} />,
              },
       ];

       const countries = [
              { name: "India", clicks: 450 },
              { name: "USA", clicks: 210 },
              { name: "United Kingdom", clicks: 120 },
              { name: "Canada", clicks: 90 },
       ];

       const visits = [
              {
                     ip: "192.xxx.xx.xx",
                     country: "India",
                     browser: "Chrome",
                     time: "2 min ago",
              },
              {
                     ip: "182.xxx.xx.xx",
                     country: "USA",
                     browser: "Firefox",
                     time: "10 min ago",
              },
              {
                     ip: "170.xxx.xx.xx",
                     country: "UK",
                     browser: "Edge",
                     time: "25 min ago",
              },
              {
                     ip: "154.xxx.xx.xx",
                     country: "Canada",
                     browser: "Safari",
                     time: "1 hour ago",
              },
       ];

       return (
              <div className="min-h-screen bg-gray-950 text-white py-10">
                     <div className="mx-auto max-w-7xl ">

                            {/* Header */}
                            <div className="mb-10">
                                   <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
                                   <p className="mt-2 text-gray-400">
                                          Track performance of your shortened URLs.
                                   </p>
                            </div>

                            {/* Search */}
                            <div className="mb-10 flex gap-4">
                                   <div className="flex flex-1 items-center rounded-xl border border-gray-700 bg-gray-900 px-4">
                                          <Search size={20} className="text-gray-400" />
                                          <input
                                                 type="text"
                                                 placeholder="Search Short URL..."
                                                 className="w-full bg-transparent px-3 py-4 outline-none"
                                          />
                                   </div>

                                   <button className="rounded-xl bg-cyan-500 px-8 font-semibold hover:bg-cyan-600">
                                          Search
                                   </button>
                            </div>

                            {/* Stats */}
                            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                                   {stats.map((item) => (
                                          <div
                                                 key={item.title}
                                                 className="rounded-2xl border border-gray-800 bg-gray-900 p-6"
                                          >
                                                 <div className="flex items-center justify-between">
                                                        {item.icon}
                                                        <span className="text-gray-500 text-sm">
                                                               {item.title}
                                                        </span>
                                                 </div>

                                                 <h2 className="mt-6 text-3xl font-bold">
                                                        {item.value}
                                                 </h2>
                                          </div>
                                   ))}
                            </div>

                            {/* URL Details */}

                            <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-900 p-6">

                                   <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
                                          <Link2 className="text-cyan-400" />
                                          Link Details
                                   </h2>

                                   <div className="space-y-5">

                                          <div>
                                                 <p className="text-sm text-gray-500">
                                                        Original URL
                                                 </p>

                                                 <p className="mt-1 break-all text-gray-300">
                                                        https://www.google.com/search?q=react
                                                 </p>
                                          </div>

                                          <div>
                                                 <p className="text-sm text-gray-500">
                                                        Short URL
                                                 </p>

                                                 <div className="mt-2 flex items-center justify-between rounded-xl border border-gray-700 bg-gray-950 px-5 py-4">

                                                        <span className="text-cyan-400">
                                                               https://short.ly/abc123
                                                        </span>

                                                        <button className="rounded-lg bg-cyan-500 p-3 hover:bg-cyan-600">
                                                               <Copy size={18} />
                                                        </button>

                                                 </div>

                                          </div>

                                   </div>

                            </div>

                            {/* Chart + Countries */}

                            <div className="mt-10 grid gap-6 lg:grid-cols-3">

                                   {/* Chart */}

                                   <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 lg:col-span-2">

                                          <h2 className="mb-6 text-2xl font-semibold">
                                                 Clicks Over Time
                                          </h2>

                                          <div className="flex h-72 items-center justify-center rounded-xl border border-dashed border-gray-700 text-gray-500">

                                                 📈 Chart.js Graph Here

                                          </div>

                                   </div>

                                   {/* Countries */}

                                   <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">

                                          <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
                                                 <Globe className="text-cyan-400" />
                                                 Top Countries
                                          </h2>

                                          <div className="space-y-5">

                                                 {countries.map((country) => (
                                                        <div
                                                               key={country.name}
                                                               className="flex justify-between border-b border-gray-800 pb-3"
                                                        >
                                                               <span>{country.name}</span>

                                                               <span className="font-semibold text-cyan-400">
                                                                      {country.clicks}
                                                               </span>
                                                        </div>
                                                 ))}

                                          </div>

                                   </div>

                            </div>

                            {/* Devices */}

                            <div className="mt-10">

                                   <h2 className="mb-6 text-2xl font-semibold">
                                          Device Usage
                                   </h2>

                                   <div className="grid gap-6 md:grid-cols-3">

                                          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 text-center">
                                                 <Monitor className="mx-auto text-cyan-400" size={40} />
                                                 <h3 className="mt-4 text-xl font-semibold">
                                                        Desktop
                                                 </h3>
                                                 <p className="mt-2 text-3xl font-bold">
                                                        60%
                                                 </p>
                                          </div>

                                          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 text-center">
                                                 <Smartphone className="mx-auto text-green-400" size={40} />
                                                 <h3 className="mt-4 text-xl font-semibold">
                                                        Mobile
                                                 </h3>
                                                 <p className="mt-2 text-3xl font-bold">
                                                        35%
                                                 </p>
                                          </div>

                                          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 text-center">
                                                 <Tablet className="mx-auto text-yellow-400" size={40} />
                                                 <h3 className="mt-4 text-xl font-semibold">
                                                        Tablet
                                                 </h3>
                                                 <p className="mt-2 text-3xl font-bold">
                                                        5%
                                                 </p>
                                          </div>

                                   </div>

                            </div>

                            {/* Recent Visits */}

                            <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-900 p-6">

                                   <h2 className="mb-6 text-2xl font-semibold">
                                          Recent Visits
                                   </h2>

                                   <div className="overflow-x-auto">

                                          <table className="w-full">

                                                 <thead>

                                                        <tr className="border-b border-gray-800 text-left text-gray-400">

                                                               <th className="py-4">IP Address</th>
                                                               <th>Country</th>
                                                               <th>Browser</th>
                                                               <th>Time</th>

                                                        </tr>

                                                 </thead>

                                                 <tbody>

                                                        {visits.map((visit, index) => (
                                                               <tr
                                                                      key={index}
                                                                      className="border-b border-gray-800 hover:bg-gray-800/40"
                                                               >
                                                                      <td className="py-4">{visit.ip}</td>
                                                                      <td>{visit.country}</td>
                                                                      <td>{visit.browser}</td>
                                                                      <td>{visit.time}</td>
                                                               </tr>
                                                        ))}

                                                 </tbody>

                                          </table>

                                   </div>

                            </div>

                     </div>
              </div>
       );
};

export default Analytics;