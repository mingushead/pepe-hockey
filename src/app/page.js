import About from '@/features/about'
import Header from '@/features/header'
import Hero from '@/features/hero'
import Tokenomics from '@/features/tokenomics'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Tokenomics />
    </>
  )
}