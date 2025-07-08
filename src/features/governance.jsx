import Image from "next/image";

export default function Governance() {
  return (
    <section className="relative flex flex-col items-center justify-between min-h-screen p-0 bg-black"> 
      <div className="relative w-full" >
        <Image
          className="absolute top-0 left-0 object-cover object-top w-screen h-screen throbbing"
          src="/images/ice-rink-level.webp"
          alt="Ice Rink"
          width={1064}
          height={490}
          priority
        />
      </div>
    </section>
  )
}