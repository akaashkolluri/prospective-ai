import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import { Card, Col, Row } from "antd";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.titleContainer}>
            <p style={{ flex: 1 }} />
            <h1 className={styles.title}>Prospective AI</h1>
            <p style={{ height: 10 }} />
            <h2 className={styles.tagline}> Educate, Innovate, Inspire</h2>
            <p style={{ flex: 2 }} />
          </div>
          <div className={styles.missionContainer}>
            <h2 style={{ margin: 10, backgroundColor: "#00000000", flex: 5 }}>
              Prospective AI is an organization dedicated to exposing today’s
              youth to the increasingly important field of Artificial
              Intelligence. The increasing applicability of AI in a variety of
              STEM fields has made understanding AI a critical skill for those
              looking to enter the workforce. Our goal is to educate students of
              all ages and skill levels on the implementation and social impacts
              of AI through free programs, workshops and competitions.
            </h2>
            <p style={{ flex: 1 }} />
            <Col style={{ flex: 3 }}>
              <h2 style={{ margin: 10, backgroundColor: "#00000000" }}>
                -Some Stat
              </h2>
              <h2 style={{ margin: 10, backgroundColor: "#00000000" }}>
                -Some Stat
              </h2>
              <h2 style={{ margin: 10, backgroundColor: "#00000000" }}>
                -Some Stat
              </h2>
              <h2 style={{ margin: 10, backgroundColor: "#00000000" }}>
                -Some Stat
              </h2>
            </Col>
          </div>
          <p style={{ height: 50 }} />
          <h2> Our Offers </h2>
          <div className={styles.grid}>
            <a href="/events" className={styles.card}>
              <h2>Events &rarr;</h2>
              <p>
                Learn how AI is affecting our world, and what you can do to make
                a difference
              </p>
            </a>
            <a href="/classes" className={styles.card}>
              <h2>Classes &rarr;</h2>
              <p>
                Weekly lessons covering the fundamentals of AI and ML for
                students
              </p>
            </a>
            <a className={styles.card}>
              <h2>Contests &rarr;</h2>
              <p>
                Create, innovate, and inspire to make the world a better place{" "}
              </p>
              <h3> Coming soon..</h3>
            </a>
          </div>
          <p style={{ height: 30 }} />
          <div className={styles.quoteContainer}>
            <h2 style={{ margin: 10, backgroundColor: "#00000000" }}>
              Prospective AI is an organization dedicated to making AI
              accessible and available to students of all ages. We rely on
              donors to provide us with the resources necessary to keep our
              programs and workshops running year-round Your donation is crucial
              in allowing us to provide valuable resources and quality education
              to our students.
            </h2>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
