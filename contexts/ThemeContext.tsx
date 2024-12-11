"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type ThemeContextType = {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.classList.contains("dark")
    setIsDark(initialColorValue)
  }, [])

  const toggleTheme = () => {
    const root = window.document.documentElement
    root.classList.toggle('dark')
    setIsDark(!isDark)
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

