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
      <section className="relative hero-gradient  overflow-hidden">
        <Image
          width={100}
          height={100}
          src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/618e08dc978d65573e65c4e8_noise%201.jpg"
          alt="bg gradient"
          className="absolute top-0 left-0 h-full w-full -z-20"
        />
        <div className="grid container mx-auto grid-cols-1 lg:grid-cols-2 px-6 sm:px-[5rem] py-8 sm:py-0 sm:pt-12">
          <div className="flex flex-col gap-6">
            <h1 className="font-Fraunces144ptSuperSoft font-[900] text-lightOrange leading-[5.3rem]  text-[4.6rem]">
              Your design
              <br className="" /> team for the
              <br className="block sm:hidden" /> cost
              <br className="hidden sm:block" /> of a salary.
            </h1>
            <p className="text-[1.5rem] sm:pb-8 sm:text-[1.8rem] text-moreLessGray font-[600] font-Fraunces72ptsupersoft">
              Full-service design support that growing B2B and non-profit
              organizations need. Are you strained because you should have a
              design team but you don&apos;t?
            </p>
            <div className="sm:pb-12">
              <Button className="bg-noise text-[1.03rem] pt-4 pb-6 px-12">
                SEE HOW WE WORK & WHAT WE CAN DO
              </Button>
            </div>
          </div>
          <div className="translate-y-1/4 flex justify-center lg:block lg:translate-x-1/4 lg:translate-y-32">
            <Image
              src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/63472dce62c72c7aebabade5_getcozy-p-800.png"
              alt=""
              width={800}
              height={814}
              className="w-[24.375rem] lg:w-[64rem]"
            />
          </div>
        </div>
      </section>
      <section className="py-36 px-12  min-w-screen   complex-background">
        <div className="grid grid-cols-1  gap-12 lg:pl-36 lg:grid-cols-2 container mx-auto">
          <div className="flex flex-col gap-12">
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
                We’re an award-winning design shop based in South Park, San
                Diego. We efficiently combine the best parts of user experience
                (UX) with creative design and execution to create effective
                collateral that connects with the human beings who interact with
                them. 🤯
              </p>
              <p className="font-Fraunces72ptsupersoft text-secondary">
                No epic quests for inspiration. Just pragmatic collaboration and
                efficient results from big-agency graduates with decades of
                experience.
              </p>
              <div className="">
                <Button className="px-16 py-5 hover:te">
                  WHY WE DO WHAT WE DO
                </Button>
              </div>
            </div>
          </div>
          <CompanyList />
        </div>
      </section>
      <section className="bg-lightGray flex flex-col items-center px-8 sm:px-12 py-16">
        <h3 className="text-secondary relative after:absolute after:content-[''] after:w-8 after:h-1 after:bg-lightOrange after:-bottom-6 after:left-1/2 after:-translate-x-1/2 text-3xl sm:text-4xl font-[600] font-Fraunces72ptsupersoft">
          ❤️ from our clients
        </h3>
        <div className="relative grid grid-cols-1 sm:grid-cols-[repeat(2,_minmax(320px,_1fr))] px-0 sm:px-12 sm:w-3/5 justify-center gap-12 sm:gap-4 mt-12">
          <div className="absolute  hidden top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 translate-y-[45%] rounded-full bg-white sm:flex justify-center items-center">
            <Image
              src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b60dd35a56ec72df4703e47_chat-icon-black.svg"
              width={32}
              height={32}
              alt=""
            />
            <span className="absolute  w-[120%] h-[120%] border border-white rounded-full "></span>
            <span className="absolute  w-[140%] h-[140%] border border-white rounded-full "></span>
          </div>
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
                I connect with hundreds of talented folks on a regular basis,
                and I can say with complete confidence that Lee is one of the
                best UX designers in Aquent/Vitamin T&apos;s global network.
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
                I connect with hundreds of talented folks on a regular basis,
                and I can say with complete confidence that .Lee is one of the
                best UX designers in Aquent/Vitamin.
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
                I connect with hundreds of talented folks on a regular basis.
                Lee is one of the best UX designers in.
              </p>
              <p className="text-[0.56rem] tracking-[0.3rem] font-Geomanist-Regular font-bold text-lessLightGray">
                SUSIE POLLASKY
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary flex flex-col gap-8 py-16 px-6">
        <h3 className="font-Fraunces72ptsupersoft text-center text-lightOrange text-[1.3rem]">
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
        <div className="relative z-20 bg-black bg-opacity-40 ">
          <div className=" flex flex-col lg:flex-row gap-12 py-10 px-8 lg:w-[52rem] lg:justify-center sm:w-[48rem] mx-auto">
            <div className="self-center">
              <Image
                src={
                  "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86db21b4d0ca56dee6a263_sddd_lockup_reverse.svg"
                }
                width={140}
                height={120}
                alt="san diego design team"
              />
            </div>
            <div className="font-Fraunces72ptsupersoft flex font-bold text-white flex-col gap-4">
              <h3 className="text-lessGray text-4xl font-bold">
                Psst…
                <br /> are you a designer?
              </h3>
              <h5 className="text-moreLightGray font-bold text-[0.94rem] leading-[1.5rem]">
                Consider joining our{" "}
                <span className="text-rose">San Diego Design Designers</span>{" "}
                group. More than 700 people, we meet online via Slack and in
                person at social events around the city. It’s a great
                opportunity to share ideas, get inspired, find support, and
                celebrate great design.
              </h5>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-darkOrange py-16 px-8 font-Fraunces72ptsupersoft text-white">
        <h3 className="font-Fraunces72ptsupersoft text-[2.6rem] leading-[2.8rem] font-bold ">
          🙋 How can we help?
        </h3>
      </section>
    </Fragment>
  );
}
