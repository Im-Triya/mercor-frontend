import React from "react";

import "@lottiefiles/lottie-player";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="bg-black py-20">
      <div className="container mx-auto grid grid-cols-2">
        <div className="">
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets2.lottiefiles.com/packages/lf20_NtbVtxMyCa.json"
          ></lottie-player>
        </div>

        <div className="flex flex-col items-center justify-center text-white">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-500">
            Market Assistant
          </h2>

          <p className="text-gray-400 text-xl my-4">
            One stop solution to all your quetions.
          </p>

          <p className="text-xl my-2">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Product Info",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Market Analysis",
                1000,
              ]}
              wrapper="span"
              speed={50}
              //   style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </p>

          <div className="my-1 flex items-center text-xl">
          <button className="border-white border-2 px-4 py-2 rounded-2xl hover:bg-white hover:text-black">
          Start Chatting
          </button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-12 ml-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
</svg>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;