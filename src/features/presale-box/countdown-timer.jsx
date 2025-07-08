import Image from "next/image";


export default function CountdownTimer() {
  return (
    <div>
      <div className="flex items-stretch justify-between countdown-timer -translate-y-[8px] gap-3 mb-3">
        <div className="countdown score-panel">12</div>
        <div className="flex flex-col items-center justify-center p-1 px-2 day-countdown border-x-3 border-y-2 border-t-10">
          <div className="text-[#63BEEB] day-digits text-5xl">28</div>
          <div className="">Days</div>
        </div>
        <div className="countdown">34</div>
      </div>
      <div className="flex second-countdown progress-bar">
        {new Array(55).fill(true).map((_, i) => <div className="second-active progress-active" key={`second-${i}`} />)}
      </div>
      <Image src="images/bolt.svg" className="lightning-bolt progress-icon" width={30} height={30} />
      <p className="uppercase score-panel -translate-y-[7px]">{"Until next price increase".replace(/[\s]/g, "     ")}</p>
    </div>
  )
}