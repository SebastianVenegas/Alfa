"use client"

import { useState } from "react"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
    >
      <Globe className="h-4 w-4 mr-1" />
      {language === 'en' ? 'English' : 'Español'}
    </button>
  )
}