import Image from "next/image";
import { text } from "../../utils/text";

export default function About() {
  return (
    <section className="relative flex flex-col items-center justify-center m-auto min-h-screen p-0 bg-linear-to-b from-[#D0FDFF] to-[#18467B]"> 
      <div className="relative flex items-start justify-center w-full h-screen py-24" >
        <Image
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] object-contain w-[100%] opacity-[100%] mix-blend-soft-light h-screen"
          src="/images/glass-faces-masked.webp"
          alt="Ice Rink"
          width={839}
          height={472}
          priority
        />
        <div className="relative flex flex-col items-center justify-center w-6xl">
          <div className="z-10 title-box">About</div>
          <Image
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[45%] object-contain w-[100%] mix-blend-screen w-full"
            src="/images/ice-cube.png"
            alt="Ice cubes"
            width={848}
            height={528}
            priority
          />
          <div className="relative z-20 flex flex-col gap-6 px-40 pt-6 text-xl leading-relaxed text-black whitespace-break-spaces">
            <p className="">
              {"Pepe Hockey is a blockchain‑enabled, spectator‑friendly hockey management game that combines strategic team‑building, verifiable on‑chain randomness, and crypto‑native betting into a single, memetic entertainment platform."}
            </p>
            <p className="">
              {text("Players collect and train NFT athletes, set high‑level tactics, and watch AI‑driven matches whose results are provably fair and replayable.")}
            </p>
            <p className="">
              {text("A native currency ($PUCK) underpins upgrades, transfers, wagers and governance, while Chainlink VRF guarantees transparent randomness.")}
            </p>
            <p className="">
              {text("The long‑term goal is to evolve Pepe Hockey into a community‑governed esport franchise with seasonal leagues, streaming integrations, and an open modding ecosystem.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}