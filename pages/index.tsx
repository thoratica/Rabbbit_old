import Head from "next/head";
import Bookmark from "../components/screen/home/Bookmark";
import Greeting from "../components/screen/home/Greeting";
import Rank from "../components/screen/home/Rank";
import SafemodeInfo from "../components/screen/home/SafemodeInfo";
import TabScreen from "../components/screen/TabScreen";

const rankItems = [
  { title: "나노마신", id: "1" },
  { title: "외모지상주의", id: "2" },
  { title: "일타강사 백사부", id: "3" },
  { title: "재벌집 막내아들", id: "4" },
  { title: "입학용병", id: "5" },
];

const bookmarks = [
  {
    thumb:
      "https://newtoki13.org/data/file/webtoon/634d818739759_1qm24cS8_340415c1dd11199a33b9bf0417b6add0200fc7ab.PNG",
    title: "동아리",
    id: "1",
  },
];

const Home = () => {
  return (
    <TabScreen>
      <Head>
        <title>Rabbbit</title>
        <meta name="description" content="Rabbbit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Greeting name="이다윗" />
      <SafemodeInfo />
      <div className="grid grid-cols-2 gap-x-2">
        <Rank title="일반웹툰 순위" items={rankItems} />
        <Rank title="성인웹툰 순위" items={rankItems} />
      </div>
      <Bookmark title="내 북마크" items={bookmarks} />
    </TabScreen>
  );
};

export default Home;
