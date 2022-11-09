import React from "react";
import Image from "next/image";
const clients = [
  {
    imageUrl:
      "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8776ae2c425f4ec285598c_NPCA%20logo%20-%20light.svg",
    w: 94,
    h: 32,
  },
  {
    imageUrl:
      "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8776ba7d82c245fddf1b2e_national%20funding%20logo%20full.svg",
    w: 106,
    h: 32,
  },
  {
    imageUrl:
      "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8776ef53cdd1e1f8cac5b1_lightstream%20logo.svg",
    w: 150,
    h: 32,
  },
  {
    imageUrl:
      "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8776ffe9c75f7306788487_Sapient.svg",
    w: 87,
    h: 32,
  },
  {
    imageUrl:
      "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f87770a7e08d5bda4246f2d_thermofisher%20logo%20full.svg",
    w: 120,
    h: 32,
  },
  {
    imageUrl:
      "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f87771603d57a6804b8e1b9_sony%20logo%20full.svg",
    w: 100,
    h: 32,
  },
  {
    imageUrl:
      "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8777233f953b1ce5aa8781_sdge%20logo.svg",
    w: 57,
    h: 32,
  },
];
export default function ClientList() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center gap-6 items-center">
      {clients.map(({ imageUrl, w, h }, idx) => (
        <div key={idx}>
          <Image src={imageUrl} width={w} height={h} alt="..." />
        </div>
      ))}
    </div>
  );
}
