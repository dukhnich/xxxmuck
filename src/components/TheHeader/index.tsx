import { Link } from "react-router-dom";
import "./style.css";

function TheHeader() {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        xxxmuck
      </Link>
    </header>
  );
}

export default TheHeader;
