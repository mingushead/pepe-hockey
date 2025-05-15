import Image from "next/image";

export default function About() {
  return (
    <section className="relative flex flex-col items-center justify-between min-h-screen p-0 bg-linear-to-b from-[#D0FDFF] to-[#18467B]"> 
      <div className="relative w-full bg-red-400" >
        <Image
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-0%] object-contain w-[100%] opacity-[100%] mix-blend-soft-light h-screen"
          src="/images/glass-faces-masked.webp"
          alt="Ice Rink"
          width={839}
          height={472}
          priority
        />
      </div>
    </section>
  )
}