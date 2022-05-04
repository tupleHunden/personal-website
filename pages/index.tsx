import type { NextPage } from "next";
import AboutMeHeader from "../components/AboutMeHeader";
import SocialIcons from "../components/SocialIcons";

const Home: NextPage = () => {
  return (
    <div>
      <AboutMeHeader />
      <SocialIcons />
    </div>
  );
};

export default Home;
