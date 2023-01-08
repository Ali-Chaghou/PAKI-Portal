
import { Link, NavLink } from "react-router-dom";

import Logo from "../Images/paki-logo.png";
import BtnDown from "../Images/down-btn.png";

import "./Header.css";

const Header = () => {
  const scrollDown = () => {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  };

  return (
    <header>
      <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/portal">PAKI Portal</NavLink>
            </li>
            <li>
                <Link to="/">
                <img src={Logo} alt="PAKI Logo" />
                </Link>
            </li>
            <li>
                <NavLink to="/drop&driveApp">Drop & Drive app</NavLink>
            </li>
            <li>
                <NavLink to="/e-voucher">e-Voucher</NavLink>
            </li>

        </ul>
      </nav>

      <div>
        <h1>
        <span>Europe`s #1</span> integrated full-service pooler of pallets and boxes.
        </h1>
      </div>

      <button type="button" className="btnDown" onClick={scrollDown}>
        <img src={BtnDown} className="btnDownImg" alt="Arrow down" />
      </button>

    </header>  
      );
};

export default Header;