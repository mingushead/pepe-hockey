"use client"

import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsList, BsMenuButton, BsTelegram, BsTiktok, BsTwitterX, BsX } from "react-icons/bs";
import { Trans, useTranslation } from "react-i18next";
import cx from "classnames";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { parseStaticPathsResult } from "next/dist/lib/fallback";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";


export default function Header() {

  const { t } = useTranslation()

  const router = useRouter()
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <header className="relative z-40 block w-full w-screen backdrop-blur backdrop-brightness-75">
      {/* Desktop */}
      <div className="flex flex-col w-full">
        <div className="flex flex-row items-center justify-between w-full px-5">
          <div className="flex items-center justify-start grow">
            <Link href="#home" className="flex items-center w-auto h-full tracking-normal text-primary">
              <Image src="/images/logo.webp" width={470} height={441} className="relative w-auto h-16 py-3 m-auto" alt={t("globals.header")} />
            </Link>
          </div>
          <div className="items-center pt-3 justify-center hidden sm:flex gap-x-12 max-w-[90vw] [&>a:hover]:text-primary [&>a:hover]:border-primary [&>a]:border-b-2 [&>a]:border-transparent uppercase [&>a]:transition-colors font-condensed text-base tracking-widest text-white font-bold">
            {/* <Link href="#about">{t("globals.about")}</Link>
            <Link href="#tokenomics">{t("globals.tokenomics")}</Link>
            <Link href="#roadmap">{t("globals.roadmap")}</Link> */}
            {/* <Link href="#about">The Game</Link>
            <Link href="#tokenomics">About</Link>
            <Link href="#roadmap">Tokenomics</Link>
            <Link href="#about">Betting & Esports</Link>
            <Link href="#about">Community & Governance</Link>
            <Link href="#about">Roadmap</Link>
            <Link href="#about">Contact</Link> */}
            {/* <Link href="https://docs.aquadoge.com/aquadoge-whitepaper" target="_blank" className={cx("relative text-black bg-primary p-1 px-3 rounded hover:bg-white hover:!text-blue hover:!border-blue")}>{t("globals.whitePaper")}</Link> */}
          </div>
          <div className="grow">
            <div className="flex items-center justify-end gap-5 px-3 text-2xl text-primary">
              <Link href="https://t.me/pepehockey" target="_blank">
                <BsTelegram />
              </Link>
              <Link href="https://x.com/pepeicehockey" target="_blank">
                <BsTwitterX  />
              </Link>
            </div>
          </div>
        </div>
        
      </div>
      {/* Mobile */} 
      <div className={cx("flex flex-col w-full hidden", { "h-screen bg-[#000000aa]": menuVisible })}>
        
        <div className="flex flex-col w-full">
          <div className="h-[60px] flex flex-row items-center justify-between w-full px-2">
            <Link 
              href="#home" 
              className="h-[60px] w-auto pr-[5px] tracking-normal text-primary flex items-center"
            >
              <Image src="/assets/logo.webp" width={85} height={60} className="relative h-[60px] w-auto m-auto" alt={t("globals.header") || "Aquadoge logo"} />
            </Link>
            <MenuButton setMenuVisible={setMenuVisible} isMenuVisible={menuVisible} />
          </div>
          <div className={cx("hidden flex-col h-[calc(100vh-160px)] items-start justify-start pt-12 gap-10 text-primary text-2xl max-w-sm m-auto", { "!flex": menuVisible })}>
            {/* <LanguageDropdown /> */}
            <Link href="https://docs.aquadoge.com/aquadoge-whitepaper" target="_blank" className={cx("relative font-serif text-white")}>{t("globals.whitePaper")}</Link>
            <Link href="./staking" className={cx("relative font-serif text-white")}>{t("globals.staking")}</Link>
            {/* <Link href="./claim" className={cx("relative font-serif text-white")}>{t("globals.dashboard")}</Link> */}
            <div className="flex items-center gap-6 text-3xl">
              <Link href="https://instagram.com/aqua.doge" target="_blank">
                <BsInstagram />
              </Link>
              <Link href="https://t.me/officialaquadoge" target="_blank">
                <BsTelegram />
              </Link>
              {/* <Link href="https://x.com/team_aquadoge" target="_blank">
                <BsTwitterX />
              </Link> */}
              <Link href="https://www.tiktok.com/@aquadogeofficial" target="_blank">
                <BsTiktok />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const menuCName = "text-4xl text-primary"
function MenuButton({ setMenuVisible, isMenuVisible }) {
  return isMenuVisible ? (
    <BsX onClick={() => setMenuVisible(false)} className={cx(menuCName)} />
  ) : (
    <BsList onClick={() => setMenuVisible(true)} className={cx(menuCName)} />
  )
}