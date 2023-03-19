import React, { useState } from "react";
import "./header.scss";
import { navigation } from "../../data";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const Header = () => {
  const [showCross, setShowCross] = useState(false);

  const handleToggle = () => {
    setShowCross(!showCross);
  };
  return (
    <>
      <header className="header">
        <h1 className="header__logo">Logo</h1>
        <input type="checkbox" id="nav-toggle" class="nav-toggle" />

        <nav className="header__nav">
          <ul className="header__list">
            {navigation.map((item) => (
              <>
                <li key={item.name}>
                  <Link
                     className="header__a"
                    to={item.route}
                  >
                    {item.name}
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </nav>
        <label for="nav-toggle" className="nav-toggle-label">
          <span onClick={handleToggle}>
            {showCross ? (
              <XMarkIcon className="toggle__icon" aria-hidden="true" />
            ) : (
              <Bars3Icon className="toggle__icon" aria-hidden="true" />
            )}
          </span>
        </label>
      </header>
    </>
  );
};

export default Header;
