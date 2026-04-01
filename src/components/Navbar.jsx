import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#ff4d4d" : "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "8px 12px",
    borderRadius: "8px",
    background: isActive ? "rgba(255,0,0,0.2)" : "transparent",
    transition: "0.3s",
  });

  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        backdropFilter: "blur(10px)",
        background: "rgba(0,0,0,0.4)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/tasks" style={linkStyle}>Tasks</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
    </nav>
  );
}