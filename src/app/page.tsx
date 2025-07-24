import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 flex flex-col items-center justify-center p-8">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          Сайн байна уу!
        </h1>
        <p className="text-xl text-gray-600 mb-12 opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
          Энэ бол миний сайхан хуудас ✨
        </p>

        {/* Image container with enhanced styling */}
        <div className="group relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/25">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl opacity-50"></div>

            {/* Text above image */}
            <h2 className="text-2xl font-bold text-gray-700 mb-6">
              Сайн байна уу
            </h2>

            <Image
              src="/download.jpeg"
              alt="Download image"
              width={350}
              height={350}
              className="relative mx-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />

            {/* Decorative elements around image */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce [animation-delay:300ms]"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-bounce [animation-delay:700ms]"></div>
            <div className="absolute top-1/2 left-4 w-3 h-3 bg-gradient-to-br from-pink-400 to-red-500 rounded-full animate-bounce [animation-delay:1000ms]"></div>
          </div>
        </div>

        {/* Additional decorative text */}
        <div className="mt-12 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <span className="text-2xl">🎨</span>
            <span className="text-gray-700 font-medium">
              Гоё priv дaa оруулxад яахав дээ…
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
