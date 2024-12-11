import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { TawkToWidget } from '@/components/tawk-to-widget'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <div className="relative">
            {children}
          </div>
          <TawkToWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}