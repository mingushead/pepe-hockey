import Image from "next/image";

export default function Tokenomics() {
  return (
    <section className="relative flex flex-col items-center justify-between min-h-screen p-0 bg-white"> 
      <div className="relative w-full bg-white" >
        <Image
          className="absolute top-0 left-0 object-cover object-top w-screen h-screen"
          src="/images/ice-rink-top-down.webp"
          alt="Ice Rink"
          width={839}
          height={472}
          priority
        />
      </div>
    </section>
  )
}