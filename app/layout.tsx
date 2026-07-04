import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import ConditionalSiteHeader from '@/components/ConditionalSiteHeader'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Army Public School Khadakwasla - Excellence in Education',
  description: 'Army Public School Khadakwasla provides quality education, character development, and holistic growth for students in a safe, supportive environment.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable} antialiased`}>
        <ConditionalSiteHeader />
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  )
}
