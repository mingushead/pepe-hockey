import Image from "next/image";

export default function Hero() {
  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen p-0"> 
      <div className="relative w-full bg-red-400" >
        <Image
          className="absolute top-0 left-0 object-cover object-top w-screen h-screen "
          src="/images/ice-rink.webp"
          alt="Ice Rink"
          width={839}
          height={472}
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-between w-full h-full max-w-5xl font-pepehockey lg:flex">
        <div className="relative flex flex-col items-start justify-start w-full h-full mt-8 -mb-32">
          <Image src="/images/logo-text.webp" width={680} height={328} className="relative z-50 w-auto h-48 py-2 m-auto drop-shadow-xl" alt={"Aquadoge logo"} />
          <Image src="/images/logo.webp" width={470} height={441} className="absolute z-20 w-auto h-28 py-2 m-auto -translate-x-1/2 -top-[70px] left-1/2 drop-shadow-xl" alt={"Aquadoge logo"} />
        </div>
        <div className="red-box min-h-[550px] flex items-end p-4">
          <div className="relative mb-0 text-center text-box" >
            <p className="p-2 px-6 pt-4 text-xl leading-relaxed whitespace-break-spaces">
              {"Get ready for the coolest game on ice this summer, with friends to be made, odds to be weighed, and champions to be decided!".replace(/[\s]/g, "     ")}
            </p>
          </div> 
        </div>
      </div>
      <div id="game-scene" className="w-[760px] h-[202px] z-20 scale-[1.4] -mt-16">
      </div>
      <div className="relative flex place-items-center z-[-1]">
        
      </div>
      <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        
      </div>
    </main>
  );
}