import Image from "next/image";
import CompanyList from "../components/Layout/Companies/CompanyList";
import Button from "../components/UI/Button";
export default function Home() {
  return (
    <div className="">
      <div className="relative hero-gradient min-h-screen min-w-screen overflow-hidden">
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
      </div>
      <div className="min-h-screen py-12 px-12 min-w-screen flex flex-col gap-12 complex-background">
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
      </div>
      <div className="bg-lightGray px-8 sm:px-12 py-16">
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
              <p className="text-sm font-Geomanist-Regular text-[#D7D2CB]">
                SUSIE POLLASKY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
