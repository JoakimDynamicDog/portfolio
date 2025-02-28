import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "../components/Avatar"; 

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-4xl items-center justify-between py-6 px-4">
      <Avatar>
          <AvatarImage src="/images/sexyboi.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      <nav>
        <ul className="flex space-x-4 text-sm sm:text-base">
          <li>
            <Link href="/" className="hover:underline text-yellow-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline text-yellow-700">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline text-yellow-700">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline text-yellow-700">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
