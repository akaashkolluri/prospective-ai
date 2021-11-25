import { Component } from "react";
import { Menu, Affix, Card, Image } from "antd";
import styles from "../styles/Header.module.css";
import { Link } from "next/link";

class Header extends Component {
  render() {
    return (
      <Affix>
        <div className={styles.header}>
          <p style={{ flex: 2 }} />
          <a>
            <img
              src="/logo.png"
              alt="Logo"
              style={{ height: 70, margin: 10 }}
            />
          </a>
          <p style={{ flex: 25 }} />
          <a className={styles.tabs}> About</a>
          <p style={{ flex: 1 }} />
          <a className={styles.tabs}> Offers</a>
          <p style={{ flex: 4 }} />
          <a
            href="https://secure.givelively.org/donate/hackplus/prospective-ai"
            className={styles.donateCard}
          >
            Support
          </a>
          <p style={{ flex: 1 }} />
        </div>
      </Affix>
    );
  }
}
export default Header;
