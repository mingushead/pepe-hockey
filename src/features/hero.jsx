import Image from "next/image";
import PresaleBox from "./presale-box";

export default function Hero() {
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen min-w-screen bg-[#D0FDFF]"> 
      <div className="relative w-full" >
        <Image
          className="absolute top-0 left-0 object-cover object-top w-screen h-screen "
          src="/images/ice-rink.webp"
          alt="Ice Rink"
          width={839}
          height={472}
          priority
        />
      </div>
      <div className="flex flex-col items-center justify-start max-w-7xl md:min-w-[1200px] z-10 relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-between w-full h-full -mb-48 font-pepehockey lg:flex">
          <div className="relative flex flex-col items-start justify-start w-full h-full mt-5">
            <Image src="/images/logo-text.webp" width={680} height={328} className="relative z-50 w-auto h-32 py-2 m-auto md:h-56 mb-90 hero-logo" alt={"Aquadoge logo"} />
            {/* <Image src="/images/logo.webp" width={470} height={441} className="absolute z-20 w-auto h-28 py-2 m-auto -translate-x-1/2 -top-[70px] left-1/2 drop-shadow-xl" alt={"Aquadoge logo"} /> */}
          </div>
        </div>
        {/* <div className="flex w-full mt-3">
          <div className="relative flex flex-col flex-1 mb-0 -ml-[130px] text-box grow bg-[#000000aa] py-8 rounded-lg max-w-[450px]" >
            <p className="p-0 px-8 text-xl leading-relaxed text-left whitespace-break-spaces">
              {"Get ready for the freshest game on ice this summer, with friends to be made, odds to be weighed, and champions to be decided!".replace(/[\s]/g, "     ")}
            </p>
            <div className="grid grid-cols-6 pt-6 pl-0 m-auto text-xl gap-y-4 whitespace-break-spaces">
              {
                [
                  "Hockey-management game",
                  "Spectator-friendly",
                  "Crypto-native betting",
                  "Community-governed",
                ].map((text) => text.replace(/[\s]/g, "     "))
                .map((text) => '•       ' + text)
                .map((text, i) => <span className="col-span-6" key={`cta-${i}`}>{text}</span>)
              }
            </div>
            <div className="flex flex-col items-center justify-around px-8 pt-8 pb-0 gap-y-2 whitespace-break-spaces [&>button]:w-full">
              <button className="primary-btn red">{"Play now".replace(/[\s]/g, "     ")}</button>
              <button className="primary-btn purple">{"Learn More".replace(/[\s]/g, "     ")}</button>
              <button className="primary-btn red">{"Visit Stadium".replace(/[\s]/g, "     ")}</button>
            </div>
          </div>
          <div className="relative flex-1 flex-grow w-1/2 mb-0 text-center opacity-0 red-box" >
            <p className="p-2 px-6 pt-4 text-xl leading-relaxed whitespace-break-spaces">
              {"Presale box".replace(/[\s]/g, "     ")}
            </p>
          </div>
        </div> */}
        <div id="game-scene" className="md:-translate-x-[0px] -translate-x-[0px] md:w-[760px] md:h-[202px] w-[380px] h-[101px] z-10 md:scale-[1.1] scale-[1.5] mb-22 md:mt-48 mt-24">
        </div>
        {/* <div className="title-box score-panel relative z-10 translate-y-[20px] whitespace-break-spaces">{"The Game".replace(/[\s]/g, "     ")}</div>
        <div className="purple-box min-h-[750px] w-full max-w-[1400px] flex p-4 mb-8 flex justify-center items-center">
          <p className="text-5xl whitespace-break-spaces">{"Le Game".replace(/[\s]/g, "     ")}</p>
        </div>
        <div className="relative flex place-items-center z-[-1]">
          
        </div>
        <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          
        </div> */}
      </div>
      {/* <PresaleBox /> */}
    </main>
  );
}