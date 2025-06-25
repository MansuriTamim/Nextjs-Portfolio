// pages/404.jsx or components/Custom404.jsx (React / Next.js)

import React from 'react';
// Optional: Uncomment the next 2 lines if you want to use a Lottie animation
// import Lottie from 'lottie-react';
// import sadTerminalAnim from '../assets/sad-terminal.json'; // Replace with your path


const Custom404 = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12 text-center">
      {/* Flickering 404 Text */}
      <h1 className="text-7xl md:text-9xl font-bold text-gray-100 flicker">404</h1>

      {/* Sad Terminal SVG */}
      <div className="w-28 h-28 md:w-36 md:h-36 mt-4">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="text-gray-500 w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 9l3 3-3 3m5 0h3M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z"
          />
        </svg>
      </div>

      {/* Optional Lottie animation */}
      {/* <div className="w-40 h-40 md:w-56 md:h-56 mt-4">
        <Lottie animationData={sadTerminalAnim} loop={true} />
      </div> */}

      {/* Message */}
      <p className="mt-6 text-lg text-gray-400">
        Looks like you’ve hit a dead route. Happens to the best of us.
      </p>

      {/* Go Home Button */}
    

      <p className="mt-8 text-sm text-gray-600 italic"> // maybe try debugging your URL?</p>
    </div>
  );
};

export default Custom404;
