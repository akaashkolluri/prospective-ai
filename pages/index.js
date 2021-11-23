import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Prospective AI</h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
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
        </main>
      </div>
      <Footer />
    </div>
  );
}
