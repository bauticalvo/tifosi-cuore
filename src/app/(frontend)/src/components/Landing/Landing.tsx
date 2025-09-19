'use client'

import { HeroSection } from './HeroSection'
import { Section2 } from './Section2'
import { Section3 } from './Section3'

export const Landing = () => {
  return (
    <div className="bg-background mt-[11vh] min-h-screen w-full flex flex-col items-center">
      <HeroSection />
      <Section2 />
      <Section3 />
      <div className="h-[300vh] bg-background"></div>
    </div>
  )
}

export default Landing
