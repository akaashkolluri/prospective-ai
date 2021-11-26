import { Component } from "react";
import { Menu, Affix, Card, Image } from "antd";
import styles from "../styles/Header.module.css";
import Link from "next/link";

class Header extends Component {
  render() {
    return (
      <Affix>
        <div className={styles.header}>
          <p style={{ flex: 2 }} />
          <Link href="/">
            <a>
              <img
                src="/logo.png"
                alt="Logo"
                style={{ height: 70, margin: 10 }}
              />
            </a>
          </Link>
          <p style={{ flex: 25 }} />
          <Link href="/about">
            <a className={styles.tabs}> About Us</a>
          </Link>
          <p style={{ flex: 1 }} />
          <Link href="/offers">
            <a className={styles.tabs}> Our Offers</a>
          </Link>
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
