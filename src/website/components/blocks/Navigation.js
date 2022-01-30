// @flow
import React, { useState } from "react";
import type { Node } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useLocale from "../../locale";
import Logo from "../../assets/icons/Logo";

type Props = {
  callHireForm: Function,
};

function Navigation(props: Props): Node {
  const t = useLocale;
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const links = [
    { path: "/#about", label: "About Us" },
    { path: "/#projects", label: "Projects" },
  ];

  const toTop = () => {
    setShowMobileMenu(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navigation">
      <div className="navigation-wrapper">
        <Link to="/" onClick={toTop} className="logo">
          <Logo />
        </Link>
        {links.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className={classNames("nav-link", {
              active: location.hash === link.path,
            })}
          >
            {link.label}
          </a>
        ))}
        <button className="nav-hire" onClick={() => props.callHireForm()}>
          {t("home.hire-cta")}
        </button>
        <FontAwesomeIcon
          icon={faBars}
          className="mobile-menu"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
      </div>
      <div
        className={classNames("mobile-nav", {
          show: showMobileMenu,
        })}
      >
        {links.map((link) => (
          <a
            key={link.path}
            href={link.path}
            onClick={() => setShowMobileMenu(false)}
            className={classNames("nav-link", {
              active: location.hash === link.path,
            })}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
