import Logo from "../global/logo";
import NavItems from "./nav-items";
import UserDropdown from "./user-dropdown";

function Header({ user }: { user: User }) {
  return (
    <header className="header sticky top-0 flex items-center shadow-md backdrop-blur-sm">
      <div className="header-wrapper container">
        <Logo />
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropdown user={user} />
      </div>
    </header>
  );
}

export default Header;
