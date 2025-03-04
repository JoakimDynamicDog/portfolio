import "./globals.css"
import "./styles/space.css"
import "./styles/testBackground.css"
import type { Metadata } from "next"
import { ReactNode } from "react"
import Footer from "@/components/Footer"
import { Slide, ToastContainer } from "react-toastify";
import Header from "@/components/Header"
import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-saira',
})

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A simple, minimal portfolio using Next.js and Tailwind CSS",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${saira.className} h-full`}>
      <body className="h-full flex min-h-screen flex-col space-background hide-scrollbar">
        <Header />
        <main className="mx-auto w-full max-w-4xl flex-1 px-4">{children}</main>
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
