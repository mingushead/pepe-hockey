import Image from "next/image";
import { text } from "../../utils/text";

export default function Roadmap() {
  return (
    <section className="relative flex flex-col items-center justify-between min-h-screen p-0"> 
      <div className="relative w-full bg-black" >
        <div
          className="absolute top-0 left-0 ice-jungle"
          // src="/images/ice-jungle.png"
        />
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
          <div className="z-10 mb-12 title-box">Roadmap</div>
          <div className="relative z-20 flex items-center gap-20 px-20 pt-12 text-xl leading-relaxed text-black whitespace-break-spaces">
            <div className="grid items-center justify-center grid-cols-12 gap-12 gap-y-48 max-w-7xl tokenomics-items [&>div]:relative [&>div]:px-8">
              <div className="col-span-4">
                <Image
                  className="absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-[50%] object-contain w-full mix-blend-screen opacity-70"
                  src="/images/ice-cube.png"
                  alt="Ice cubes"
                  width={848}
                  height={528}
                  priority
                />
                <span className="relative z-10 green">{text("Q3 2025")} </span>
                <p className="relative z-10">{text("Closed alpha (campaign mode, basic NFTs)")}</p>
              </div>
              <div className="col-span-4">
                <Image
                  className="absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-[50%] object-contain w-full mix-blend-screen opacity-70"
                  src="/images/ice-cube.png"
                  alt="Ice cubes"
                  width={848}
                  height={528}
                  priority
                />
                <span className="relative z-10 blue">{text("Q4 2025")} </span>
                <p className="relative z-10 green">{text("$PUCK presale, marketplace live, VRF‑powered exhibition matches")}</p>
              </div>
              <div className="col-span-4">
                <Image
                  className="absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-[50%] object-contain w-full mix-blend-screen opacity-70"
                  src="/images/ice-cube.png"
                  alt="Ice cubes"
                  width={848}
                  height={528}
                  priority
                />
                <span className="relative z-10 orange">{text("Q1 2026")}</span>
                <p className="relative z-10">{text("Open beta, betting layer, Twitch toolkit")}</p>
              </div>
              <div className="col-span-4 col-start-3">
                <Image
                  className="absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-[50%] object-contain w-full mix-blend-screen opacity-70"
                  src="/images/ice-cube.png"
                  alt="Ice cubes"
                  width={848}
                  height={528}
                  priority
                />
                <span className="relative z-10 ice">{text("Q2 2026")}</span>
                <p className="relative z-10">{text("Season 1 world league, mobile companion app")}</p>
              </div>
              <div className="col-span-4">
                <Image
                  className="absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-[50%] object-contain w-full mix-blend-screen opacity-70"
                  src="/images/ice-cube.png"
                  alt="Ice cubes"
                  width={848}
                  height={528}
                  priority
                />
                <span className="relative z-10 red">{text("2027")} </span>
                <p className="relative z-10">{text("DAO launch, modding SDK, console ports")}</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}