import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b bg-black z-50 border-yellow-600">
      <div className="h-14 container flex items-center">
        {/* Desktop */}
        <MainNav />

        {/* Mobile */}
        <MobileNav />
      </div>
    </header>
  );
}