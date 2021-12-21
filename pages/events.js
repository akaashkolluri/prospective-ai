import {} from "antd";
import styles from "../styles/Events.module.css";

import Footer from "../components/footer";
import Header from "../components/header";
import EventCard from "../components/eventCard";

import Construction from "../components/construction";
import Link from "next/link";

export default function Events() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div style={{ height: 100 }} />
        <h2>Upcoming Events</h2>
        <div className={styles.grid}>
          <a className={styles.card} href="">
            <h2>
              Bias in AI Workshop<p>TBD</p>
            </h2>

            <p>
              Learn how our perspectives manifest themselves in the algorithms
              we create.
            </p>
            <h3> More info coming soon </h3>
          </a>
        </div>
        <div style={{ height: 200 }} />
        <h2>Past Events</h2>
        <div className={styles.grid}>
          <a
            className={styles.card}
            href="https://docs.google.com/forms/d/e/1FAIpQLSdfWCATkXtsIyGWhridh5g-IkXRBBV9wHnnCVImzOYO8Z4D0g/viewform"
          >
            <h2>
              Social Impact of AI Workshop <p> 12/9/21</p>
            </h2>

            <p>
              Learn the basics of AI, including possibilities, emerging
              applications, and social issues. Featuring virtual guest speaker
              <b> Dr. Jody Porrazzo</b>.
            </p>
            <h3> Click to sign up </h3>
          </a>
        </div>
        <div style={{ height: 100 }} />
      </div>
      <Footer />
    </div>
  );
}
