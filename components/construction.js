import { Component } from "react";
import styles from "../styles/Construction.module.css";
import Link from "next/link";

class Construction extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div style={{ flex: 1 }} />
        <h2> This page is currently under construction</h2>
        <Link href="/">
          <a> Return </a>
        </Link>
        <div style={{ flex: 2 }} />
      </div>
    );
  }
}
export default Construction;
