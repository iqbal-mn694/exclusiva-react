import { useState } from "react";
import SmallButton from "../../atoms/Buttons/SmallButton";
import Logo from "../../atoms/Logo";
import Search from "../../atoms/Search";

const Navbar = () => {
  const [isSearchFocused, setSearchFocused] = useState(false);

  return (
    <header className="bg-white/80 w-full max-md:px-6 px-16 pt-6 pb-4 flex items-center">
      <Logo />

      <Search
        isSearchFocused={isSearchFocused}
        setSearchFocused={setSearchFocused}
       />

      <div className={`flex gap-5 mr-10 max-md:mr-0  ${isSearchFocused ? "max-md:hidden" : ""} transition-all duration-300 ease-in-out`}>
        <div className="cursor-pointer">
          <i class="fa-solid fa-cart-shopping text-xl"></i>
        </div>
        <div className="cursor-pointer">
          <i class="fa-solid fa-user text-xl"></i>
        </div>
      </div>

      <div className="max-md:hidden">
        <SmallButton buttonType="button_primary" text="Sign in" />
        <SmallButton buttonType="button_secondary_not_filled" text="Sign up" />
      </div>


    </header>
  )
}

export default Navbar;