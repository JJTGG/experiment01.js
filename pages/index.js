import Link from "next/link";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navigation />

      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>
            PERSONAL CARBON TRACKER
          </p>

          <h1>
            Small choices.
            <br />
            Greener future.
          </h1>

          <p className={styles.description}>
            Welcome to EcoTrack Mini. Start tracking your
            transportation, energy use, and dietary choices
            to better understand your environmental impact.
          </p>

          <Link href="/track/" className={styles.button}>
            Start Tracking
          </Link>
        </section>
      </main>
    </>
  );
}