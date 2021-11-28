import { Component } from "react";
import { Menu, Affix, Card, Image, Dropdown } from "antd";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const dropdownMenu = (
  <Menu className={styles.offersMenu}>
    <Menu.Item key="events">
      <Link href="/events">
        <a className={styles.tabs}>Events</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="classes">
      <Link href="/classes">
        <a className={styles.tabs}>Classes</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="contests">
      <Link href="/contests">
        <a className={styles.tabs}>Contests</a>
      </Link>
    </Menu.Item>
  </Menu>
);

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
            <a className={styles.tabs}>About</a>
          </Link>
          <p style={{ flex: 1 }} />
          <Dropdown overlay={dropdownMenu}>
            <a className={styles.tabs}> Offers</a>
          </Dropdown>
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
