import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter2.0</title>
      </Head>
      <main>
        {/* Sidebar */}
        <SideBar />

        {/* Feed */}
        <Feed />

        {/* wWidgets */}
      </main>
    </div>
  );
}
