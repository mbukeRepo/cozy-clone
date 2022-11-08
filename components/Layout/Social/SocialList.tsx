import React from "react";
import Image from "next/image";
const icons = [
  {
    icon: "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b60dd35a56ec709b2703dcf_twitter-icon-white.svg",
    bg: "bg-[#1DA1F2]",
  },
  {
    icon: "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b7ca6c2fa8225b032800f4b_logo%20linkedin.svg",
    bg: "bg-[#2977C9]",
  },
  {
    icon: "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b60dd35a56ec76cb2703dcb_facebook-icon-white.svg",
    bg: "bg-[#4267B2]",
  },
  {
    icon: "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b60dd35a56ec72b67703dcc_instagram-icon-white.svg",
    bg: "bg-[#E4405F]",
  },
  {
    icon: "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/603d6382bef83b84cdeb5671_icn_youtube-white.svg",
    bg: "bg-[#C4302B]",
  },
  {
    icon: "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/633246b3d2509ffd71749f81_clutch.svg",
    bg: "bg-[#16313A]",
  },
  {
    icon: "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b807bd69a836145c6f39016_icon%20envelope.svg",
    bg: "bg-[#223240]",
  },
];

export default function SocialList() {
  return (
    <div className="flex gap-1">
      {icons.map(({ icon, bg }, idx) => (
        <div
          className={`${bg} flex p-1 items-center rounded-sm justify-center w-5 h-5`}
        >
          <Image
            src={icon}
            className={`w-4`}
            width={60}
            height={60}
            alt="socials"
          />
        </div>
      ))}
    </div>
  );
}
