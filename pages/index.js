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
        <p>Consultoria e organização de eventos.</p>
      </footer>
    </div>
  );
}
