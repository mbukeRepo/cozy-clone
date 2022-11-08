import Image from "next/image";
import CompanyList from "../components/Layout/Company/CompanyList";
import Button from "../components/UI/Button";
import ClientList from "../components/Layout/Client/ClientList";
import { Fragment, useEffect, useRef } from "react";
import Link from "next/link";
export default function Home() {
  const videoRef = useRef<any>();
  useEffect(() => {
    if (videoRef) {
      videoRef.current?.play();
    }
  }, []);
  return (
    <Fragment>
      <section className="relative hero-gradient min-h-screen min-w-screen overflow-hidden">
        <Image
          width={100}
          height={100}
          src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/618e08dc978d65573e65c4e8_noise%201.jpg"
          alt="bg gradient"
          className="absolute top-0 left-0 h-full w-full -z-20"
        />
        <div className="flex flex-col px-6 py-8">
          <div className="flex flex-col gap-6">
            <h1 className="font-Fraunces144ptSuperSoft font-[900] leading-[3.3rem] text-[#d4ac8e] text-[3.25rem]">
              Your design
              <br /> team for the
              <br /> cost of a salary.
            </h1>
            <p className="text-[1.5rem] text-[#B2B0AB] font-[600] font-Fraunces72ptsupersoft">
              Full-service design support that growing B2B and non-profit
              organizations need. Are you strained because you should have a
              design team but you don't?
            </p>
            <Button className="bg-[url('https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/61bbc96064c698bc567db060_noise10.webp')]">
              SEE HOW WE WORK & WHAT WE CAN DO
            </Button>
          </div>
          <div className="translate-y-1/4">
            <Image
              src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/63472dce62c72c7aebabade5_getcozy-p-800.png"
              alt=""
              width={390}
              height={390}
            />
          </div>
        </div>
      </section>
      <section className="min-h-screen py-12 px-12 min-w-screen flex flex-col gap-12 complex-background">
        <div className="text-xl tracking-[0.2rem]">🌴🐻🇺🇸</div>
        <div className="flex flex-col gap-6">
          <h2 className="font-[600] font-Fraunces72ptsupersoft text-secondary text-5xl">
            Get Cozy
          </h2>
          <h4 className="font-Fraunces72ptsupersoft text-2xl text-tartiary">
            Design & digital marketing in San Diego, California
          </h4>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-Fraunces72ptsupersoft text-secondary">
            We’re an award-winning design shop based in South Park, San Diego.
            We efficiently combine the best parts of user experience (UX) with
            creative design and execution to create effective collateral that
            connects with the human beings who interact with them. 🤯
          </p>
          <p className="font-Fraunces72ptsupersoft text-secondary">
            No epic quests for inspiration. Just pragmatic collaboration and
            efficient results from big-agency graduates with decades of
            experience.
          </p>
          <div>
            <Button>WHY WE DO WHAT WE DO</Button>
          </div>
          <CompanyList />
        </div>
      </section>
      <section className="bg-lightGray px-8 sm:px-12 py-16">
        <h3 className="text-secondary relative after:absolute after:content-[''] after:w-8 after:h-1 after:bg-lightOrange after:-bottom-6 after:left-1/2 after:-translate-x-1/2 text-3xl sm:text-4xl font-[600] font-Fraunces72ptsupersoft">
          ❤️ from our clients
        </h3>
        <div className="flex flex-col gap-12 mt-12">
          <div className="bg-[url('https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/61bbc96064c698bc567db060_noise10.webp')] bg-[#223240] flex flex-col py-16 px-8 rounded-[80%_80%_0_100%]">
            <div className="border-2 self-center  border-white rounded-2xl w-16 h-16 overflow-hidden">
              <Image
                width={80}
                height={80}
                src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b770510976c9e1777077786_susie.webp"
                alt="susie"
              />
            </div>
            <div className="font-Fraunces72ptsupersoft flex flex-col gap-6 items-end">
              <p className="text-lightOrange text-end">
                “One of the top design professionals…”
              </p>
              <p className="text-[#D7D2CB] text-end">
                I connect with hundreds of talented folks on a regular basis,
                and I can say with complete confidence that Lee is one of the
                best UX designers in Aquent/Vitamin T's global network.
              </p>
              <p className="text-[0.56rem] tracking-[0.3rem] font-Geomanist-Regular font-bold text-[#D7D2CB]">
                SUSIE POLLASKY
              </p>
            </div>
          </div>
          <div className="bg-[url('https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/61bbc96064c698bc567db060_noise10.webp')] bg-[#2d4850] flex flex-col py-16 px-12 rounded-[100%_100%_50%_0%]">
            <div className="border-2 relative bg-[#2d4850]  self-center  border-white rounded-2xl w-16 h-16 overflow-hidden">
              <Image
                width={80}
                height={80}
                src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/604fb5a50fc9931734c91126_1517679695814.webp"
                alt="susie"
                className="bg-[#2d4850]"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#2d4850] bg-opacity-40"></div>
            </div>
            <div className="font-Fraunces72ptsupersoft flex flex-col gap-6 items-start">
              <p className="text-lightOrange text-start">
                “One of the top design professionals…”
              </p>
              <p className="text-[#D7D2CB] text-start">
                I connect with hundreds of talented folks on a regular basis,
                and I can say with complete confidence that Lee is one of the
                best UX designers in Aquent/Vitamin T's global network.
              </p>
              <p className="text-[0.56rem] tracking-[0.3rem] font-Geomanist-Regular font-bold text-[#D7D2CB]">
                SUSIE POLLASKY
              </p>
            </div>
          </div>
          <div className="bg-[url('https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/61bbc96064c698bc567db060_noise10.webp')] bg-[#c47d57] flex flex-col py-16 px-12 rounded-[100%_0%_60%_60%]">
            <div className="border-2 relative bg-[#2d4850]  self-end  border-white rounded-2xl w-16 h-16 overflow-hidden">
              <Image
                width={80}
                height={80}
                src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/604fb5a50fc9931734c91126_1517679695814.webp"
                alt="susie"
                className="bg-[#2d4850]"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#2d4850] bg-opacity-40"></div>
            </div>
            <div className="font-Fraunces72ptsupersoft flex flex-col gap-6 items-end">
              <p className="text-lightOrange text-end">
                “One of the top design professionals…”
              </p>
              <p className="text-[#D7D2CB] text-end">
                I connect with hundreds of talented folks on a regular basis.
              </p>
              <p className="text-[0.56rem] tracking-[0.3rem] font-Geomanist-Regular font-bold text-[#D7D2CB]">
                SUSIE POLLASKY
              </p>
            </div>
          </div>
          <div className="bg-[url('https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/61bbc96064c698bc567db060_noise10.webp')] bg-[#c47d57] flex flex-col py-16 px-12 rounded-[0%_100%_60%_60%]">
            <div className="border-2 relative bg-[#2d4850]  self-start  border-white rounded-2xl w-16 h-16 overflow-hidden">
              <Image
                width={80}
                height={80}
                src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/604fb5a50fc9931734c91126_1517679695814.webp"
                alt="susie"
                className="bg-[#2d4850]"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#2d4850] bg-opacity-40"></div>
            </div>
            <div className="font-Fraunces72ptsupersoft flex flex-col gap-6 items-start">
              <p className="text-lightOrange text-start">
                “One of the top design professionals…”
              </p>
              <p className="text-[#D7D2CB] text-start">
                I connect with hundreds of talented folks on a regular basis.
              </p>
              <p className="text-[0.56rem] tracking-[0.3rem] font-Geomanist-Regular font-bold text-[#D7D2CB]">
                SUSIE POLLASKY
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#223240] flex flex-col gap-8 py-16 px-6">
        <h3 className="font-Fraunces72ptsupersoft text-center text-[#d4ac8e] text-[1.3rem]">
          More than 150 happy clients
        </h3>
        <ClientList />
      </section>
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full scale-[3.2]">
          <video ref={videoRef} loop autoPlay muted className="w-full h-full">
            <source
              src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86da0e3af903761f6c302c_Black And White Video Of Man Infront Of The Computer-transcode.webm"
              data-wf-ignore="true"
            />
          </video>
        </div>
        <div className="relative bg-black bg-opacity-40 flex flex-col gap-12 py-10 px-8 ">
          <div>
            <Image
              src={
                "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86db21b4d0ca56dee6a263_sddd_lockup_reverse.svg"
              }
              width={140}
              height={120}
              alt="san diego design team"
            />
          </div>
          <div className="font-Fraunces72ptsupersoft flex flex-col gap-4">
            <h3 className="text-[#E4DED5] text-4xl font-bold">
              Psst…
              <br /> are you a designer?
            </h3>
            <h5 className="text-[#C4BFB8] font-bold text-[0.94rem] leading-[1.5rem]">
              Consider joining our{" "}
              <span className="text-[#B9104B]">San Diego Design Designers</span>{" "}
              group. More than 700 people, we meet online via Slack and in
              person at social events around the city. It’s a great opportunity
              to share ideas, get inspired, find support, and celebrate great
              design.
            </h5>
          </div>
        </div>
      </section>
      <section className="bg-[#B55730] py-16 px-8 font-Fraunces72ptsupersoft text-white">
        <h3 className="font-Fraunces72ptsupersoft text-[2.6rem] leading-[2.8rem] font-bold ">
          🙋 How can we help?
        </h3>
      </section>
    </Fragment>
  );
}
