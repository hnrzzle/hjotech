import Head from "next/head";
import Image from "next/image";
import MainHeading from "../components/MainHeading";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Henry Oliveira || Software Engineer</title>
        <meta
          name="description"
          content="Henry Oliveira || Software Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <MainHeading />
      </main>
    </>
  );
}
