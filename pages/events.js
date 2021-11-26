import {} from "antd";
import styles from "../styles/Events.module.css";

import Footer from "../components/footer";
import Header from "../components/header";
import Construction from "../components/construction";
import Link from "next/link";

export default function Events() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2>Upcoming Events</h2>
        <div className={styles.grid}>
          <Link href="/events">
            <a className={styles.card}>
              <h2>Social Impact of AI</h2>
              <p>
                Learn how AI is affecting our world, and get
                <b> inspired </b> to make a difference
              </p>
              <h3> Sign Up</h3>
            </a>
          </Link>
        </div>
        <div style={{ flex: 1 }} />
      </div>
      <Footer />
    </div>
  );
}
