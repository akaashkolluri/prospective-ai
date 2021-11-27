import {} from "antd";
import styles from "../styles/About.module.css";

import Footer from "../components/footer";
import Header from "../components/header";
import Construction from "../components/construction";

export default function About() {
  return (
    <div>
      <Header />
      <Construction />
      {/* <div className={styles.container}>
        <h2>Temp</h2>
        <p style={{ flex: 1 }} />
      </div> */}
      <Footer />
    </div>
  );
}
