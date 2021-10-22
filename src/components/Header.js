import { Link } from "react-router-dom";

import logo from "./../assets/301acb92970d41f78f8ea1c388c568b9.png";


import "./../styles/Header.scss";
const Header = () => {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <img src={logo} alt="logo UniCut"/>
      </Link>
    </header>
  );
};

export default Header;
