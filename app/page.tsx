import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.header}>Hello world</h1>
      </div>
    </main>
  );
}
