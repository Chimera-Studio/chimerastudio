// @flow
import React from "react";
import type { Node } from "react";
import { useLocation } from "react-router";
import classNames from "classnames";
import Logo from "../../assets/icons/Logo";

function Navigation(): Node {
  const location = useLocation();
  const links = [
    { path: "#about", label: "About Us" },
    { path: "#projects", label: "Projects" },
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
        <a href="/" onClick={toTop} className="logo">
          <Logo />
        </a>
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
      </div>
    </nav>
  );
}

export default Navigation;
