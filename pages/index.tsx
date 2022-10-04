import { GetServerSideProps } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import Widgets from "../components/Widgets";
import { Tweet } from "../typings";
import { fetchTweets } from "../utilities/fetchTweets";

interface Props {
  tweets: Tweet[];
}

export default function Home({ tweets }: Props) {
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Twitter2.0</title>
      </Head>
      <main className="grid grid-cols-9">
        {/* Sidebar */}
        <SideBar />

        {/* Feed */}
        <Feed tweets={tweets} />

        {/* wWidgets */}
        <Widgets />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return {
    props: {
      tweets,
    },
  };
};
