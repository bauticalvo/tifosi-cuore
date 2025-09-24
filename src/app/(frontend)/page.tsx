import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'
import Landing from './src/components/Landing/Landing'
import { Header } from './src/components/Header/Header'
import { Footer } from './src/components/Footer/Footer'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <div className="bg-primary font-primary w-screen overflow-hidden">
      <Header />
      <Landing />
      <Footer />
    </div>
  )
}
