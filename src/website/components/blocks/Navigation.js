// @flow
import React from "react";
import type { Node } from "react";
import { NavHashLink } from "react-router-hash-link";
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
        <NavHashLink to="/" onClick={toTop} className="logo">
          <Logo />
        </NavHashLink>
        {links.map((link) => (
          <NavHashLink
            key={link.path}
            to={link.path}
            className="nav-link"
            activeClassName="active"
            smooth
          >
            {link.label}
          </NavHashLink>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
