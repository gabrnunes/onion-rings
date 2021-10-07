import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Onion Rings - Eventos com experiência</title>
        <meta
          name="description"
          content="Organização de eventos, com foco em experiências espetaculares."
        />
        <link rel="alternate icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <Image src="/logo.svg" alt="Onion Rings" width={315} height={80} />
      </main>

      <footer className={styles.footer}>
        <p>Organização de eventos, com foco em experiências espetaculares.</p>
        <div className={styles.events}>
        <a
          href="https://shiftfestival.cc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/shift.svg"
            alt="Sh*ft Festival"
            width={100}
            height={50}
          />
        </a>
        <a href="https://codecon.dev" target="_blank" rel="noopener noreferrer">
          <Image src="/codecon.svg" alt="Codecon" width={180} height={60} />
        </a>
        </div>
      </footer>
    </div>
  );
}
