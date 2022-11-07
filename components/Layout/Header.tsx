import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="relative py-3 gap-8 flex items-center justify-center image-gradient">
      <img
        src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/618e08dc978d65573e65c4e8_noise%201.jpg"
        alt="bg gradient"
        className="absolute top-0 left-0 h-full w-full -z-20"
      />
      <div>
        <img
          src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f86150178cfb414cd74bce4_Cozy_logo_canvas.svg"
          alt="cozydesign logo"
          className="w-[5.8rem]"
        />
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.6"
          stroke="currentColor"
          className="w-6 h-6 text-[#E4DED5]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
}
