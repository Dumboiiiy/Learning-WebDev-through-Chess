import React from "react";
import logo from "../assets/logo1.jpg";
import styles from "../css_modules/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src={logo} className={styles.logo1}></img>
      <ul className={styles.uli}>
        <Link to="/">
          <li className={styles.lil}>Home</li>
        </Link>

        <Link to="/products">
          <li className={styles.lil}>Products</li>
        </Link>

        <Link to="/about">
          <li className={styles.lil}>About</li>
        </Link>

        <Link to="/contact">
          <li className={styles.lil}>Contact</li>
        </Link>
      </ul>
      <button className={styles.btn}>Get Started</button>
    </div>
  );
};

export default Navbar;
