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
        <div className={styles.content}>
          <div className={styles.mandala}></div>
          <div className={styles.logoContainer}>
            <img
              src="/logo.png"
              alt="Swift Bharat Logo"
              width={200}
              height={200}

            />
          </div>
          <h1 className={`${styles.title} ${font.className}`}>
            <span className={styles.titleDecoration}>॰</span>
            Swift Bharat
            <span className={styles.titleDecoration}>॰</span>
          </h1>
          <p className={styles.date}>26th - 27th September, 2025</p>
          <p className={styles.venue}>Venue: BIC, Bengaluru, India.</p>
          <div className={styles.decorativeLine}></div>
        </div>
      </div>
    </main>
  );
}
