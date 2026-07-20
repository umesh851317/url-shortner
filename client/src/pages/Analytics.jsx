import React, { useState } from "react";
import axios from "axios";
import {
  Link2,
  Copy,
  MousePointerClick,
  CalendarDays,
  Clock3,
} from "lucide-react";
import { useEffect } from "react";

//   {
//     id: 1,
//     shortId: "F3k3xtwyZ",
//     redirectUrl: "https://chatgpt.com",
//     totalClicks: 24,
//     createdAt: "19 Jul 2026",
//     lastVisit: "2 min ago",
//   },
//   {
//     id: 1,
//     shortId: "F3k3xtwyZ",
//     redirectUrl: "https://chatgpt.com",
//     totalClicks: 24,
//     createdAt: "19 Jul 2026",
//     lastVisit: "2 min ago",
//   },
//   {
//     id: 2,
//     shortId: "Abx912Lm",
//     redirectUrl: "https://google.com",
//     totalClicks: 18,
//     createdAt: "18 Jul 2026",
//     lastVisit: "15 min ago",
//   },
//   {
//     id: 3,
//     shortId: "Mern2026",
//     redirectUrl: "https://github.com",
//     totalClicks: 140,
//     createdAt: "17 Jul 2026",
//     lastVisit: "1 hour ago",
//   },
//   {
//     id: 4,
//     shortId: "NodeJS99",
//     redirectUrl: "https://react.dev",
//     totalClicks: 57,
//     createdAt: "16 Jul 2026",
//     lastVisit: "Yesterday",
//   },
// ];

const Analytics = () => {
  const [urls, setUrls] = useState([])
  const [selectedUrl, setSelectedUrl] = useState({});

  const copyUrl = () => {
    navigator.clipboard.writeText(
      `http://localhost:8000/${selectedUrl.shortId}`
    );
  };

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await axios.get("http://localhost:8000/history")
        console.log("sjnc", response.data);

        setUrls(response.data)
        response.data.length > 0 ? setSelectedUrl(response.data[0]) : null
      } catch (error) {

      }
    }
    fetchUrls();
  }, [])

  return (
    <div className=" min-h-[91vh] bg-gray-950 text-white p-8">
      <div className=" max-w-7xl mx-auto min-h-[91vh]    ">

        {/* Main Layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Side */}
          <div className="lg:col-span-4">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 h-[650px]">
              <h2 className="text-xl font-semibold mb-5">History</h2>

              <div className="space-y-4 overflow-y-auto h-[560px] pr-2 hide-scrollbar">
                {urls.map((url) => (

                  <div
                    key={url.id}
                    onClick={() => setSelectedUrl(url)}
                    className={`cursor-pointer rounded-xl border p-4 transition-all duration-300 ${selectedUrl.id === url.id
                      ? "border-cyan-500 bg-cyan-500/10"
                      : "border-gray-800 bg-gray-950 hover:border-cyan-500 hover:bg-gray-900"
                      } `}
                  >

                    <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                      <Link2 size={18} />
                      {url.shortid}
                    </div>

                    <p className="text-gray-400 text-sm truncate mt-2">
                      {url.redirectUrl}
                    </p>

                    <div className="flex justify-between items-center mt-4 text-sm">
                      <span className="text-gray-500">
                        {new Date(url.createdAt).toLocaleDateString()}
                      </span>

                      <span className="text-cyan-400 font-medium">
                        {url.totalClicks} Clicks
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-8">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 h-full">
              {/* Short URL */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Link2 size={18} />
                  Short URL
                </div>

                <div className="flex justify-between items-center bg-gray-950 border border-gray-800 rounded-xl p-4">
                  <span className="text-cyan-400 font-medium"
                  >
                    {`http://localhost:8000/${selectedUrl.shortid}`}
                  </span>

                  <button
                    onClick={copyUrl}
                    className="p-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
                  >
                    <Copy size={18} />
                  </button>
                </div>
              </div>

              {/* Original URL */}
              <div className="mb-10">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Link2 size={18} />
                  Original URL
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 break-all text-gray-300">
                  {selectedUrl.redirectUrl}
                </div>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-5">
                <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 text-center">
                  <MousePointerClick
                    className="mx-auto text-cyan-400 mb-3"
                    size={30}
                  />

                  <h2 className="text-3xl font-bold">
                    {selectedUrl.totalClicks}
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Total Clicks
                  </p>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 text-center">
                  <CalendarDays
                    className="mx-auto text-yellow-400 mb-3"
                    size={30}
                  />

                  <h2 className="text-lg font-semibold">
                    {new Date(selectedUrl.createdAt).toLocaleDateString()}
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Created On
                  </p>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 text-center">
                  <Clock3
                    className="mx-auto text-green-400 mb-3"
                    size={30}
                  />

                  <h2 className="text-lg font-semibold">
                    {new Date(selectedUrl.createdAt).toLocaleTimeString()}
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Last Visit
                  </p>
                </div>
              </div>

              <div className='w-full text-center mt-10' >
                <a href={`http://localhost:8000/${selectedUrl.shortid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-cyan-500 px-8 py-3 font-medium  transition hover:bg-cyan-600">
                  redirect
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;