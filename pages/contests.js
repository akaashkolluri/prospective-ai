import {} from "antd";
import styles from "../styles/Contests.module.css";

import Footer from "../components/footer";
import Header from "../components/header";
import Construction from "../components/construction";
import Link from "next/link";

export default function Contests() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div style={{ flex: 1 }} />
        <h2>Contests at Prospective AI are coming soon</h2>
        <Link href="/">
          <a> Return </a>
        </Link>
        <div style={{ flex: 2 }} />
      </div>
      <Footer />
    </div>
  );
}
