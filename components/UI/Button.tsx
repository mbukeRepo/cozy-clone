import React from "react";

export default function Button({ className, children }: any) {
  return (
    <div
      className={`px-12 text-center font-Geomanist-Bold text-sm text-white tracking-wider py-2 rounded-lg bg-primary ${className}`}
    >
      {children}
    </div>
  );
}
