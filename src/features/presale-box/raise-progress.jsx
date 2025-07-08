import Image from "next/image";


export default function RaiseProgress() {
  return (
    <div className="relative flex flex-col gap-2 py-2">
      <p className="mt-2 -mb-1 uppercase score-panel">{"$870,000 / $1,000,000".replace(/[\s]/g, "     ")}</p>
      <div className="flex raised-countdown progress-bar">
        {new Array(52).fill(true).map(() => <div className="raised-active progress-active" key={`progress-${i}`}  />)}
      </div>
      <Image src="images/heart.svg" className="progress-icon raised-icon" width={30} height={30} />
      <p className="mt-1 uppercase score-panel">{"total raised".replace(/[\s]/g, "     ")}</p>
    </div>
  )
}