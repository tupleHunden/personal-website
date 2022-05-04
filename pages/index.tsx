import type { NextPage } from "next";
import Head from "next/head";
import AboutMeHeader from "../components/AboutMeHeader";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>RJ Smith | Fullstack Developer</title>
        <meta name="description" content="Personal website for RJ Smith." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AboutMeHeader />
    </div>
  );
};

export default Home;
