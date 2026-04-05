import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>RentEase</h2>

      <ul style={styles.navLinks}>
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff"
  },
  logo: {
    margin: 0
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px"
  }
};

export default Navbar;