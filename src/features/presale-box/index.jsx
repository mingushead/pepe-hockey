import Image from "next/image"
import CountdownTimer from "./countdown-timer"
import RaiseProgress from "./raise-progress"

export default function PresaleBox() {
  return (
    <div className="!z-30 whitespace-break-spaces !absolute top-15 right-18 w-[30vw] mb-0 text-center red-box flex flex-col justify-center items-stretch px-2" >
      <div className="inline px-8 pb-0 red-box -mt-[30px] mb-2 score-panel mx-2">
        <div className="title-box score-panel -translate-y-[25px]">{"Pepe Hockey Presale".replace(/[\s]/g, "     ")}</div>
        <CountdownTimer />
      </div>
      <div className="inline px-8 pb-0 mx-2 red-box score-panel mb-99">
        <RaiseProgress />
      </div>
      <button className="mb-3 primary-btn purple">{"Buy Now".replace(/[\s]/g, "     ")}</button>
    </div>
  )
}