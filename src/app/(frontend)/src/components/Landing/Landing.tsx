'use client'

import { HeroSection } from './HeroSection'
import { Section2 } from './Section2'
import { Section3 } from './Section3'
import { Section4 } from './Section4'

export const Landing = () => {
  return (
    <div className="bg-background mt-[11vh] min-h-screen w-screen overflow-hidden flex flex-col items-center">
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  )
}

export default Landing
