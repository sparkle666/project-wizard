import Image from 'next/image'
import FirstHero from './components/hero'
import WhyChooseUs, { HowItWorks, WhatsIncluded } from './components/section'

export default function Home() {
  return (
    <main>
      <FirstHero />
      <WhyChooseUs />
      <WhatsIncluded />
      <HowItWorks />
    </main>
  )
}
