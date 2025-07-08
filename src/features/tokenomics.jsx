
import Image from "next/image";
import { text } from "../../utils/text";

export default function About() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen p-0 m-auto bg-white"> 
      <div className="relative flex items-center justify-center w-full h-screen" >
        <Image
          className="absolute top-0 left-0 object-cover object-top w-screen h-screen"
          src="/images/ice-rink-top-down.webp"
          alt="Ice Rink"
          width={839}
          height={472}
          priority
        />
        <div className="relative flex flex-col items-center justify-center w-6xl">
          <div className="z-10 title-box">Tokenomics</div>
          <Image
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] object-contain w-[100%] mix-blend-screen opacity-80 w-full"
            src="/images/ice-cube.png"
            alt="Ice cubes"
            width={848}
            height={528}
            priority
          />
          <div className="relative z-20 flex items-center gap-20 px-20 pt-12 text-xl leading-relaxed text-black whitespace-break-spaces">
            <div className="flex flex-col items-center justify-between w-3/5 gap-12 grow-0">
              <div className="w-90 h-90 bg-blue-700 rounded-[50%]" />
              {text("Total Supply: 1 Billion $PUCK")}
            </div>
            <div className="flex flex-col gap-4 tokenomics-items">
              <p className=""><span className="red">{text("Presale (10%)")}</span> {text("Bonding‑curve sale; early buyers get beta access + founder badges")}</p>
              <p className=""><span className="blue">{text("Play‑to‑Earn Pool (35%)")}</span> {text("Distributed over 5 years via league rewards")}</p>
              <p className=""><span className="orange">{text("Staking & Liquidity (20%)")}</span> {text("DEX pools, matchmaking escrow yield")}</p>
              <p className=""><span className="ice">{text("Team Treasury (20%)")}</span> {text("Development, marketing, esports sponsorships")}</p>
              <p className=""><span className="brown">{text("Advisors & Partners (5%)")}</span> {text("12‑month cliff")}</p>
              <p className=""><span className="green">{text("Airdrops (10 %)")}</span> {text("Meme contests, community quests")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}