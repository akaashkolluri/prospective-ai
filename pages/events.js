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
        <div style={{ flex: 1 }} />
        <h2>Upcoming Events</h2>
        <div className={styles.grid}>
          <a
            className={styles.card}
            href="https://docs.google.com/forms/d/e/1FAIpQLSdfWCATkXtsIyGWhridh5g-IkXRBBV9wHnnCVImzOYO8Z4D0g/viewform"
          >
            <h2>
              Social Impact of AI Workshop{" "}
              <p style={{ fontSize: 20 }}> 12/9/21</p>
            </h2>

            <p>
              Learn the basics of AI, including possibilities, emerging
              applications, and social issues. Featuring virtual guest speaker
              <b> Dr. Jody Porrazzo</b>.
            </p>
            <h3> Click to sign up </h3>
          </a>
        </div>
        <div style={{ flex: 3 }} />
      </div>
      <Footer />
    </div>
  );
}
