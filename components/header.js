import { Component } from "react";
import { Menu, Affix, Card, Image } from "antd";
import styles from "../styles/Home.module.css";
import { Link } from "next/link";

class Header extends Component {
  render() {
    return (
      <Affix>
        <Menu className={styles.header}>
          <p style={{ flex: 1 }} />
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              style={{ height: 70, margin: 10 }}
            />
          </Link>
          <p style={{ flex: 20 }} />
          <Menu.Item key="About">About</Menu.Item>
          <Menu.Item key="Offerings">Offerings</Menu.Item>
          <Menu.Item key="Support">Support</Menu.Item>
          <p style={{ flex: 1 }} />
        </Menu>
      </Affix>
    );
  }
}
export default Header;
