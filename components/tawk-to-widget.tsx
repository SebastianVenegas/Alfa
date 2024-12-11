"use client"

import { useEffect } from 'react'

declare global {
  interface Window {
    Tawk_API?: {
      toggle?: () => void;
      maximize?: () => void;
    }
  }
}

export function TawkToWidget() {
  useEffect(() => {
    var s1 = document.createElement("script")
    var s0 = document.getElementsByTagName("script")[0]
    s1.async = true
    s1.src = 'https://embed.tawk.to/67556fd22480f5b4f5aa6664/1ieirpjn0'
    s1.charset = 'UTF-8'
    s1.setAttribute('crossorigin', '*')
    s0.parentNode?.insertBefore(s1, s0)
  }, [])

  return null
}

export function openTawkToChat() {
  if (window.Tawk_API?.maximize) {
    window.Tawk_API.maximize()
  }
}