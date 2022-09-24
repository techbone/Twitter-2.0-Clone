import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import Widgets from "../components/Widgets";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Twitter2.0</title>
      </Head>
      <main className="grid grid-cols-9">
        {/* Sidebar */}
        <SideBar />

        {/* Feed */}
        <Feed />

        {/* wWidgets */}
        <Widgets />
      </main>
    </div>
  );
}
