'use client'

import { HeroSection } from './HeroSection'

export const Landing = () => {
  return (
    <div className="bg-background mt-[11vh] min-h-screen w-full flex flex-col items-center">
      <HeroSection />
      <div className="h-[300vh]"></div>
    </div>
  )
}

export default Landing
