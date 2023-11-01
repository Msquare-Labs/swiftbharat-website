import Image from 'next/image'
import styles from './page.module.css'
import localFont from "next/font/local";

const font = localFont({
  src: "SAMAN.ttf",
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div>
          <span className={`${styles.title} ${font.className}`}>Swift Bharat</span>
          <br />
          <span className={styles.subtitle}>Coming Soon in 2024 ⌚️</span>
        </div>
      </div>
    </main>
  );
}
