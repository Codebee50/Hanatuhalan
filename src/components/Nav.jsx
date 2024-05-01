// import {logo} from '../assets/icons'
import { navLinks } from "../constants";
import { hamburger, xmark } from "../assets/icons";
import { Fragment, useState } from "react";
import { Dropdown, Space } from "antd";
import { IoChevronDownSharp } from "react-icons/io5";
import { Drawer } from "antd";

const Nav = () => {
  const [navVisible, setNavVisible] = useState(false);

  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const closeNavHandler = () => {
    setNavDrawerOpen(false);
  };

  const openNavHandler = () => {
    setNavDrawerOpen(true);
  };

  const navClickHandler = () => {
    setNavVisible(!navVisible);
  };

  function reformSubLiksForAntD(sublinks) {
    const items = sublinks.map((item) => ({
      key: `sub-${item.label}`,
      label: <a href={item.href} onClick={closeNavHandler}>{item.label}</a>,
    }));

    return { items };
  }
  return (
    <Fragment>
      <Drawer
        title="Hannatu Halan Foundation"
        onClose={closeNavHandler}
        open={navDrawerOpen}
        style={{ backgroundColor: "#ECF3EF", font: "Poppins" }}
      >
        <div className="w-full h-full bg-light-green flex flex-col gap-10">
          {navLinks.map((link) =>
            !link.breakup ? (
              <li key={link.label} className="list-none">
                <a
                  href={link.href}
                  className="font-poppins hover:text-slate-500 text-hero-txt cursor-pointer font-medium"
                  onClick={closeNavHandler}
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <Dropdown
                key={link.label}
                menu={reformSubLiksForAntD(link.subLinks)}
              >
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="font-poppins hover:text-slate-500 text-hero-txt cursor-pointer font-medium"
                >
                  <Space className="font-poppins">
                    {link.label}
                    <IoChevronDownSharp />
                  </Space>
                </a>
              </Dropdown>
            )
          )}
        </div>
      </Drawer>

      <section className="sticky top-0 bg-light-green z-50">
        <header className="w-full flex flex-col py-4 sticky top-0 bg-light-green z-50">
          <nav
            className="flex max-xl:padding-x w-full justify-between max-container"
            aria-label="main"
          >
            <p className="font-dancingscript text-hero-text font-bold text-3xl">
              Hannatu Halan
            </p>

            <div className="max-tablet:block hidden" onClick={openNavHandler}>
              <img
                src={navVisible ? xmark : hamburger}
                alt="hamburger"
                width={25}
                height={25}
              />
            </div>

            <ul className="flex-row items-center gap-16 hidden tablet:flex max-tablet:absolute">
              {navLinks.map((link) =>
                !link.breakup ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-poppins hover:text-slate-500 text-hero-txt cursor-pointer font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <Dropdown
                    key={link.label}
                    menu={reformSubLiksForAntD(link.subLinks)}
                  >
                    <a
                      href=""
                      onClick={(e) => e.preventDefault()}
                      className="font-poppins hover:text-slate-500 text-hero-txt cursor-pointer font-medium"
                    >
                      <Space className="font-poppins">
                        {link.label}
                        <IoChevronDownSharp />
                      </Space>
                    </a>
                  </Dropdown>
                )
              )}
            </ul>
          </nav>

          <nav
            className={`${
              navVisible ? "py-12 h-[450px]" : "closed-h py-0"
            } flex w-full flex-col justify-center items-center transition-all duration-300 ease-linear overflow-hidden`}
            aria-label="mobile"
          >
            <ul className="flex flex-col padding-x gap-16 tablet:flex w-full">
              {navLinks.map((link) => (
                <li key={link.label} className="border-b-2 pb-2">
                  <a
                    href={link.href}
                    onClick={navClickHandler}
                    className="font-poppins hover:text-slate-500 text-dark-txt"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </section>
    </Fragment>
  );
};

export default Nav;
