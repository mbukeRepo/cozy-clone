import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialList from "./Social/SocialList";
export default function Footer() {
  return (
    <footer className="font-Fraunces72ptsupersoft flex flex-col px-4 sm:px-16 py-12  bg-lightGray">
      <div className="container mx-auto flex flex-col">
        <div className="border-b border-tartiary py-4 flex flex-col md:flex-row sm:justify-between items-center gap-4 sm:gap-16 px-6 sm:px-0">
          <div className="flex gap-10 flex-col sm:flex-row">
            <div className="w-[4.7rem]">
              <Link href="/">
                <Image
                  src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8782865afd27755f3cb5bd_Cozy_logo_denim.svg"
                  width={600}
                  height={412}
                  alt="cozy black logo"
                />
              </Link>
            </div>
            <ul className="flex flex-col text-tartiary items-center sm:flex-row sm:gap-6">
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/services"}>Services</Link>
              </li>
              <li>
                <Link href={"/work"}>Work</Link>
              </li>
              <li>
                <Link href={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex gap-2 flex-grow items-center">
              <div className="w-[1.25rem]">
                <Image
                  src={
                    "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f862ba8b2efe0fc2b486af2_emoji%402x.webp"
                  }
                  width={256}
                  height={256}
                  alt={"san diego"}
                />
              </div>
              <p className="text-rose text-xs basis-48 whitespace-nowrap">
                San Diego Digital Designers
              </p>
            </div>
            <div className="flex justify-center py-4 w-full">
              <SocialList />
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col lg:flex-row items-center">
          <div className="py-6 flex gap-3 px-8 sm:px-0">
            <div className="flex flex-col items-center gap-2">
              <div>
                <Image
                  src={
                    "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6331fe7646cb0557541386cd_BBB%20Accredited%20Business%20Horizontal%20Seal%20-%20Vector69Com.svg"
                  }
                  height={193}
                  width={513}
                  alt="..."
                  className="w-[8rem]"
                />
              </div>
              <h5 className="text-secondary font-Geomanist-Bold text-xs font-bold">
                BBB rating: A+
              </h5>
            </div>
            <div>
              <Image
                src={
                  "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/634dd43d0cf9ec7420324d59_bod-new_shield-logo-member-p-500.png"
                }
                width={250}
                height={262}
                alt={"..."}
                className="w-[8rem]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-12 items-center lg:items-end lg:flex-row ">
            <h4 className="text-center text-xs">
              Made with love in beautiful, sunny San Diego. ©2021
            </h4>
            <ul className="flex gap-8 text-tartiary text-xs">
              <li>Privacy</li>
              <li>Photo credit</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
