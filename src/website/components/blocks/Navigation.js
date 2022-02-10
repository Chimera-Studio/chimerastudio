// @flow
import React, { useEffect, useState } from "react";
import type { Node } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { isEmpty } from "lodash";
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
  const body = document.querySelector("body");
  const links = [
    { path: "/#about", label: "About Us" },
    { path: "/#projects", label: "Projects" },
  ];

  const toTop = () => {
    setShowMobileMenu(false);
    if (body) body.scrollTo(0, 0);
  };

  useEffect(() => {
    if (!isEmpty(location.hash)) {
      const section = document.querySelector(location.hash);
      if (body) body.scrollTo(0, section ? section.offsetTop - 90 : 0);
    }
  }, [body, location]);

  return (
    <nav className="navigation">
      <div className="navigation-wrapper">
        <Link to="/" onClick={toTop} className="logo">
          <Logo />
        </Link>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={classNames("nav-link", {
              active: location.hash === link.path,
            })}
          >
            {link.label}
          </Link>
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
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setShowMobileMenu(false)}
            className={classNames("nav-link", {
              active: location.hash === link.path,
            })}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
