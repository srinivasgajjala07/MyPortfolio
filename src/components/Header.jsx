import { useState, useEffect } from "react";
import logo from "../assets/image.png";
import { useNavigate, NavLink } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const [isLight, setIsLight] = useState(false);
  useEffect(() => {
    document.body.className = isLight ? "light" : "dark";
  }, [isLight]);
  return (
    <header className="header">
      <div className="left">
        <div className="logo-container" onClick={() => navigate("/")}>
          <div className="logo-ring"></div>
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div style={{ display: "flex",gap:'40px' }} className="right theme-toggle">
        <div>
          <button style={{padding:'10px 17px',borderRadius:'25px',fontSize:'medium'}}>
           <a
  href="srinivas_resume.pdf"
  download
  style={{
    display: "flex",
    alignItems: "center",
    gap: "8px",
    textDecoration: "none",
    color: "inherit",
  }}
>
            <svg
              style={{ order: 0, flexShrink: 0}}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M228 152v56a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20v-56a12 12 0 0 1 24 0v52h152v-52a12 12 0 0 1 24 0Zm-108.49 8.49a12 12 0 0 0 17 0l40-40a12 12 0 0 0-17-17L140 123V40a12 12 0 0 0-24 0v83l-19.51-19.49a12 12 0 0 0-17 17Z" />
            </svg>
            MY Resume
          </a>
          </button>
          
        </div>
        <div>
          <label className="switch">
            <input
              type="checkbox"
              aria-label="Toggle theme"
              checked={isLight}
              onChange={() => setIsLight(!isLight)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;
