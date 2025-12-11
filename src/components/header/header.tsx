import Image from "next/image";
import Link from "next/link";
import NavItems from "./nav-items";
import UserDropdown from "./user-dropdown";

function Header() {
  return (
    <header className="header sticky top-0 flex items-center shadow-md backdrop-blur-sm">
      <div className="header-wrapper container">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Market Sentinel"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer select-none"
          />
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropdown />
      </div>
    </header>
  );
}

export default Header;
