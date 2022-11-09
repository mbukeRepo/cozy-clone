import React from "react";
import Image from "next/image";
import Burger from "../UI/vectors/Burger";
import NavList from "./NavBar/NavList";
import Link from "next/link";

export default function Header() {
  return (
    <div className="relative py-3  sm:px-16 image-gradient">
      <div className="container  gap-8 mx-auto flex items-center justify-center lg:justify-between">
        <Image
          src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/618e08dc978d65573e65c4e8_noise%201.jpg"
          alt="bg gradient"
          className="absolute top-0 left-0 h-full w-[6.25rem] -z-20"
          width={600}
          height={412}
        />
        <Link href="/">
          <Image
            src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f86150178cfb414cd74bce4_Cozy_logo_canvas.svg"
            alt="cozydesign logo"
            className="w-[5.8rem]"
            width={100}
            height={100}
          />
        </Link>
        <NavList />
        <div className="block lg:hidden">
          <Burger />
        </div>
      </div>
    </div>
  );
}
