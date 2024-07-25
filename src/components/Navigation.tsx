'use client';

import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useLocale from '@/locale';
import Logo from '../assets/icons/Logo';

function Navigation() {
  const { t } = useLocale();
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const links = [
    { path: '/#about', label: 'About Us' },
    { path: '/#projects', label: 'Projects' },
  ];

  const toggleNav = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="navigation">
      <div className="navigation-wrapper">
        <Link className="logo" href="/" onClick={toggleNav}>
          <Logo />
        </Link>
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={classNames('nav-link', {
              active: pathname === link.path,
            })}
          >
            {link.label}
          </Link>
        ))}
        <a className="nav-hire" href="mailto:chimerastudiotm@gmail.com" target="_blank">
          {t('home.hire-cta')}
        </a>
        <FontAwesomeIcon
          icon={faBars}
          className="mobile-menu"
          onClick={toggleNav}
        />
      </div>
      <div
        className={classNames('mobile-nav', {
          show: showMobileMenu,
        })}
      >
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            onClick={toggleNav}
            className={classNames('nav-link', {
              active: pathname === link.path,
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
