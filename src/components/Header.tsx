import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "../components/Avatar"; 

export default function Header() {
  return (
    <header className="mx-auto flex max-w-4xl items-center justify-between py-6 px-4">
      <Avatar>
          <AvatarImage src="/images/sexyboi.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      <nav>
        <ul className="flex space-x-4 text-sm sm:text-base">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
