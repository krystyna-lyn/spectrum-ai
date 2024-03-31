import { navigation } from "../constants/index";
import { spectrum } from "../assets";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(true);

  const togglenavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();

    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="flex items-center space-x-2 w-[12rem] xl:mr-8" href="#hero">
          <img src={spectrum} width={40} height={20} alt="Spectrum" />
          <span>Spectrum AI</span>
        </a>

        <nav
          className={`${openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8
          lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div
            className="relative z-3 flex flex-col items-center justify-center
            m-auto lg:flex-row"
          >
            {navigation.map((link) => (
              <a
                key={link.id}
                href={link.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl transition-colors
              uppercase text-n-1 hover:text-color-1 ${link.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
              ${link.url === pathname.hash ? "z-2 lg:text-n-1" : "text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1`}
              >
                {link.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n 1 lg:block">
          New Account
        </a>

        <Button href="#signin" className="hidden lg:flex">
          Sign in
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={togglenavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
