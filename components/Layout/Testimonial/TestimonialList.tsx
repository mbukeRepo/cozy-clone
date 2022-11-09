import React from "react";
import Image from "next/image";

export default function TestimonialList() {
  return (
    <React.Fragment>
      <div className="bg-noise bg-secondary self-end flex max-h-[24rem] flex-col py-16 px-8 rounded-[80%_80%_0_100%]">
        <div className="border-2 self-center  border-white rounded-2xl w-16 h-16 overflow-hidden">
          <Image
            width={80}
            height={80}
            src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b770510976c9e1777077786_susie.webp"
            alt="susie"
          />
        </div>
        <div className="font-Fraunces72ptsupersoft flex flex-col gap-6 sm:gap-2 items-end">
          <p className="text-lightOrange text-end">
            “One of the top design professionals…”
          </p>
          <p className="text-lessLightGray text-end">
            I connect with hundreds of talented folks on a regular basis, and I
            can say with complete.
          </p>
          <p className="text-[0.56rem] tracking-[0.3rem] font-Geomanist-Regular font-bold text-lessLightGray">
            SUSIE POLLASKY
          </p>
        </div>
      </div>
      <div className="bg-noise bg-lessDarkBlue flex flex-col py-16 px-12 rounded-[100%_100%_50%_0%] sm:w-4/5">
        <div className="border-2 relative bg-lessDarkBlue  self-center  border-white rounded-2xl w-16 h-16 overflow-hidden">
          <Image
            width={80}
            height={80}
            src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/604fb5a50fc9931734c91126_1517679695814.webp"
            alt="susie"
            className="bg-lessDarkBlue"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-lessDarkBlue bg-opacity-40"></div>
        </div>
        <div className="font-Fraunces72ptsupersoft flex flex-col gap-6 items-start">
          <p className="text-lightOrange text-start">
            “One of the top design professionals…”
          </p>
          <p className="text-lessLightGray text-start">
            I connect with hundreds of talented folks on a regular basis, and I
            can say with complete confidence that .Lee is one of the best UX
            designers in Aquent/Vitamin.
          </p>
          <p className="text-[0.56rem] tracking-[0.3rem] font-Geomanist-Regular font-bold text-lessLightGray">
            SUSIE POLLASKY
          </p>
        </div>
      </div>
      <div className="bg-noise bg-darkOrange flex flex-col py-16 px-12 rounded-[100%_0%_60%_60%] sm:max-w-[18rem] sm:max-h-[24rem] justify-self-end">
        <div className="border-2 relative bg-lessDarkBlue  self-end  border-white rounded-2xl w-16 h-16 overflow-hidden">
          <Image
            width={80}
            height={80}
            src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/604fb5a50fc9931734c91126_1517679695814.webp"
            alt="susie"
            className="bg-lessDarkBlue"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-lessDarkBlue bg-opacity-40"></div>
        </div>
        <div className="font-Fraunces72ptsupersoft flex flex-col gap-6 items-end">
          <p className="text-lightOrange text-end">
            “One of the top design professionals…”
          </p>
          <p className="text-lessLightGray text-end">
            I connect with hundreds of talented folks on a regular basis.
          </p>
          <p className="text-[0.56rem] tracking-[0.3rem] font-Geomanist-Regular font-bold text-lessLightGray">
            SUSIE POLLASKY
          </p>
        </div>
      </div>
      <div className="bg-noise bg-moreDarkOrange flex flex-col py-16 px-12 rounded-[0%_100%_60%_60%]">
        <div className="border-2 relative bg-lessDarkBlue  self-start  border-white rounded-2xl w-16 h-16 overflow-hidden">
          <Image
            width={80}
            height={80}
            src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/604fb5a50fc9931734c91126_1517679695814.webp"
            alt="susie"
            className="bg-lessDarkBlue"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-lessDarkBlue bg-opacity-40"></div>
        </div>
        <div className="font-Fraunces72ptsupersoft flex flex-col gap-6 items-start">
          <p className="text-lightOrange text-start">
            “One of the top design professionals…”
          </p>
          <p className="text-lessLightGray text-start">
            I connect with hundreds of talented folks on a regular basis. Lee is
            one of the best UX designers in.
          </p>
          <p className="text-[0.56rem] tracking-[0.3rem] font-Geomanist-Regular font-bold text-lessLightGray">
            SUSIE POLLASKY
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
