import { Component } from "react";
import { Menu, Affix, Card, Image } from "antd";
import styles from "../styles/Home.module.css";
import logo from "../public/logo.png";

class Header extends Component {
  render() {
    return (
      <Affix>
        <Menu className={styles.header}>
          <p style={{ flex: 1 }} />
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <p style={{ flex: 3 }} />
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
