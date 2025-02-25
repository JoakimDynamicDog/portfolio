import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Slide, ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A simple, minimal portfolio using Next.js and Tailwind CSS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        <main className="mx-auto max-w-4xl px-4">{children}</main>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
          />
      </body>
    </html>
  )
}
