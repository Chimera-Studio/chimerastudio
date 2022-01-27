// @flow
import React from "react";
import type { Node } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import classNames from "classnames";
import useLocale from "../../locale";
import Logo from "../../assets/icons/Logo";

type Props = {
  callHireForm: Function,
}

function Navigation(props: Props): Node {
  const t = useLocale;
  const location = useLocation();
  const links = [
    { path: "/#about", label: "About Us" },
    { path: "/#projects", label: "Projects" },
  ];

  const toTop = () => {
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
        <button onClick={() => props.callHireForm()} className="nav-hire">{t("home.hire-cta")}</button>
      </div>
    </nav>
  );
}

export default Navigation;
