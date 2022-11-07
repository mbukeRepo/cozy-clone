import React from "react";
import Image from "next/image";
import Burger from "../UI/vectors/Burger";

export default function Header() {
  return (
    <div className="relative py-3 gap-8 flex items-center justify-center image-gradient">
      <img
        src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/618e08dc978d65573e65c4e8_noise%201.jpg"
        alt="bg gradient"
        className="absolute top-0 left-0 h-full w-full -z-20"
      />
      <div>
        <Image
          src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f86150178cfb414cd74bce4_Cozy_logo_canvas.svg"
          alt="cozydesign logo"
          className="w-[5.8rem]"
          width={100}
          height={100}
        />
      </div>
      <div>
        <Burger />
      </div>
    </div>
  );
}
