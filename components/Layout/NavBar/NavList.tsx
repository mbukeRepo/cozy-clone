import Link from "next/link";
import React from "react";
import NavItem from "./NavItem";
const navList = [
  {
    name: "Get cozy",
    link: "/get-cozy",
  },
  {
    name: "What we do",
    link: "/about",
  },
  {
    name: "Our work",
    link: "/work",
  },
  {
    name: "The blog",
    link: "/blog",
  },
  {
    name: "Say hi",
    link: "/contact",
  },
];
export default function NavList() {
  return (
    <ul className="hidden lg:flex text-lessGray text-2xl  gap-6 items-center font-Fraunces72ptsupersoft">
      {navList.map(({ name, link }) => (
        <NavItem key={name} name={name} link={link} />
      ))}
    </ul>
  );
}
