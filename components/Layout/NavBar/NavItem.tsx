import React from "react";
import Link from "next/link";
export default function NavItem({ name, link }: any) {
  return (
    <li className="hover:text-tartiary hover:-translate-y-2 transition-all duration-300">
      <Link href={link}>{name}</Link>
    </li>
  );
}
