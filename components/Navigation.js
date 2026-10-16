import Link from "next/link";
import styles from "../styles/Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        EcoTrack Mini
      </Link>

      <Link href="/track" className={styles.link}>
        Track Activity
      </Link>
    </nav>
  );
}