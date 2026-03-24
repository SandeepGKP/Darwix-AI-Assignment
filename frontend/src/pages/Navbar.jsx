import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
  color: isActive ? "blue" : "white",
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
  borderBottom: isActive ? "2px solid blue" : "none",
});
  return (
    <nav className="w-full" style={styles.nav}>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/empathy" style={linkStyle}>Empathy Engine</NavLink>
      <NavLink to="/pitch" style={linkStyle}>Pitch Visualizer</NavLink>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "12px",
    background: "#111",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};