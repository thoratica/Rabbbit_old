import Head from "next/head";
import { useState } from "react";
import Modal from "../components/common/Modal";
import Bookmark from "../components/screen/home/Bookmark";
import Greeting from "../components/screen/home/Greeting";
import Rank from "../components/screen/home/Rank";
import SafemodeInfo from "../components/screen/home/SafemodeInfo";
import SetUrlInfo from "../components/screen/home/SetUrlInfo";
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
    id: "1",
    title: "재벌집 예순일곱째아들",
    thumb: "https://tica.fun/api/thumbnail?title=재벌집%20예순일곱째아들",
    updated: 1672511315,
  },
  {
    id: "2",
    title: "우사모 유료 회원 송준호",
    thumb: "https://tica.fun/api/thumbnail?title=우사모%20유료%20회원%20송준호",
    updated: 1546280915,
  },
];

const Home = () => {
  const [safemodeOn, setSafemodeOn] = useState(true);
  const [open, setOpen] = useState(false);
  const [modalChildren, setModalChildren] = useState(<></>);

  return (
    <TabScreen>
      <Head>
        <title>Rabbbit</title>
        <meta name="description" content="Rabbbit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Greeting name="이다윗" onState={[safemodeOn, setSafemodeOn]} setState={setOpen} setChildren={setModalChildren} />
      {/* <SafemodeInfo setState={setOpen} setChildren={setModalChildren} /> */}
      <SetUrlInfo setState={setOpen} setChildren={setModalChildren} />
      <div className="grid grid-cols-2 gap-x-2">
        <Rank title="일반웹툰 순위" items={rankItems} />
        <Rank title="성인웹툰 순위" items={rankItems} />
      </div>
      <Bookmark title="내 북마크" items={bookmarks} />

      <Modal state={[open, setOpen]} children={modalChildren} />
    </TabScreen>
  );
};

export default Home;
