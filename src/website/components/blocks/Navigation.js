// @flow
import React from "react";
import type { Node } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/icons/Logo";

function Navigation(): Node {
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
        <div className="logo" onClick={toTop}>
          <Logo />
        </div>
        {links.map((link) => (
          <NavLink key={link.path} to={link.path} className="nav-link">
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
