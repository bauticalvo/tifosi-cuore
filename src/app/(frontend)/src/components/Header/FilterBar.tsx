'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { ShopMenu } from './Filter/ShopMenu'
import { ColectionMenuElements, MoreMenuElements, ShopMenuElements } from './Filter/ShopMenuData'

export const FilterBar = () => {
  const [isHovered, setIsHovered] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Limpiar timeout al desmontar el componente
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const clearTimeoutRef = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  const handleMouseEnterButton = useCallback(
    (index: number) => {
      clearTimeoutRef()
      setIsHovered(index)
    },
    [clearTimeoutRef],
  )

  const handleMouseLeaveButton = useCallback(() => {
    clearTimeoutRef()
    timeoutRef.current = setTimeout(() => {
      setIsHovered(0)
    }, 300)
  }, [clearTimeoutRef])

  const handleMouseEnterMenu = useCallback(() => {
    clearTimeoutRef()
  }, [clearTimeoutRef])

  const handleMouseLeaveMenu = useCallback(() => {
    clearTimeoutRef()
    timeoutRef.current = setTimeout(() => {
      setIsHovered(0)
    }, 300)
  }, [clearTimeoutRef])

  const CustomButton = ({ text, index }: { text: string; index: number }) => {
    return (
      <button
        onMouseEnter={() => handleMouseEnterButton(index)}
        onMouseLeave={handleMouseLeaveButton}
        className="text-2xl font-light group relative flex items-center h-full px-4 py-2 transition-colors hover:text-tertiary"
      >
        <p className="text-2xl font-light group relative">{text}</p>
        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-tertiary transition-all duration-300 ease-out group-hover:w-full"></span>
      </button>
    )
  }

  return (
    <div className="w-full h-full border-b border-light/20 flex items-center justify-start space-x-6 px-8 relative">
      <CustomButton text="Tienda" index={1} />
      <CustomButton text="Colecciones" index={2} />
      <CustomButton text="Más" index={3} />

      {/* Menú desplegable */}
      {(isHovered === 1 || isHovered === 2 || isHovered === 3) && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full  backdrop-blur-sm shadow-xl z-50 border-t border-light/10"
          onMouseEnter={handleMouseEnterMenu}
          onMouseLeave={handleMouseLeaveMenu}
        >
          {isHovered === 1 && (
            <div className="">
              <ShopMenu
                columns={ShopMenuElements.columns}
                imageColumns={ShopMenuElements.imageColumns.map((item) => ({
                  ...item,
                  imageUrl: item.image,
                }))}
              />
            </div>
          )}
          {isHovered === 2 && (
            <div className="">
              <ShopMenu
                columns={ColectionMenuElements.columns}
                imageColumns={ColectionMenuElements.imageColumns.map((item) => ({
                  ...item,
                  imageUrl: item.image,
                }))}
              />
            </div>
          )}
          {isHovered === 3 && (
            <div className="">
              <ShopMenu
                columns={MoreMenuElements.columns}
                imageColumns={MoreMenuElements.imageColumns?.map((item) => ({
                  ...item,
                  imageUrl: item.image,
                }))}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default FilterBar
