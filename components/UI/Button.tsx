import React from "react";

export default function Button({ className, children }: any) {
  return (
    <button
      className={` text-center font-Geomanist-Bold  text-white tracking-wider rounded-lg bg-primary ${className}`}
    >
      {children}
    </button>
  );
}
