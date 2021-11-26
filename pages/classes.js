import {} from "antd";
import styles from "../styles/Classes.module.css";

import Footer from "../components/footer";
import Header from "../components/header";
import Construction from "../components/construction";

export default function Classes() {
  return (
    <div>
      <Header />
      <Construction />
      <Footer />
    </div>
  );
}
