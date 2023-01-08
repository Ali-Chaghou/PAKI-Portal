import "./Footer.css";

import { Link, NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <p>
        © Copyright <span>Faber Group</span> 2023
      </p>
      <div>
        <ul>
            <li>
                <NavLink to="/impressum">Impressum</NavLink>
            </li>
            <li>
                <NavLink to="/datenschutz-UndCookies-Erklärung">Datenschutz-und Cookies-Erklärung</NavLink>
            </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;