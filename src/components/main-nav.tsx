import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../components/Avatar";

export default function MainNav() {
  return (
    <div className="hidden md:flex w-full justify-between items-center">
      <Link href="/">
        <Avatar>
          <AvatarImage src="/images/sexyboi.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>
      <nav className="flex items-center gap-3 lg:gap-4 text-yellow-400">
        <Link href="/">Home</Link>
        <Link href="/projects">Project</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
