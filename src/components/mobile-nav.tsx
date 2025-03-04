"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../components/Avatar";

export default function MobileNav() {
  return (
    <div className="md:hidden w-full flex justify-end">
      <Sheet>
        <SheetTrigger>
          <AlignJustify className="text-yellow-600 mr-2"/>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
            <SheetDescription className="sr-only">Navigate through the site</SheetDescription>
          </SheetHeader>
          <SheetClose asChild>
            <Link href="/">
              <Avatar>
                <AvatarImage src="/images/sexyboi.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          </SheetClose>
          <nav className="flex flex-col gap-3 lg:gap-4 mt-6">
            <SheetClose asChild>
              <Link href="/projects">Project</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/about">About</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/contact">Contact</Link>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
