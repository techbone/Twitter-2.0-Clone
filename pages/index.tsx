import { GetServerSideProps } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import Widgets from "../components/Widgets";
import { fetchTweets } from "../utilities/fetchTweets";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return {
    props: {},
  };
};
