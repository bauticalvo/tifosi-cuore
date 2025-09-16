import React from 'react'
import '../../styles/globals.css'

export const metadata = {
  description: 'Dentro de cada hincha',
  title: 'Tifosi Cuore',
  icons: {
    icon: '/tifosi_logo.svg',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="es">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
