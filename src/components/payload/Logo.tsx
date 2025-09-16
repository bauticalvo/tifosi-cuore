import Image from 'next/image'
import React from 'react'
import logo from '../../assets/tifosi_logo_44.png'

export default function Logo() {
  return (
    <div>
      <Image className="h-20 object-contain" src={logo} alt="logo" />
    </div>
  )
}
