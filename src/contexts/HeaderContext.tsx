'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type HeaderContextType = {
  isTransparent: boolean
  setIsTransparent: (isTransparent: boolean) => void
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined)

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [isTransparent, setIsTransparent] = useState(false) // Default to non-transparent

  return (
    <HeaderContext.Provider value={{ isTransparent, setIsTransparent }}>
      {children}
    </HeaderContext.Provider>
  )
}

export function useHeader() {
  const context = useContext(HeaderContext)
  if (context === undefined) {
    throw new Error('useHeader must be used within a HeaderProvider')
  }
  return context
}