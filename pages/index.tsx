import Head from "next/head";
import TabScreen from "../components/TabScreen";

const Home = () => {
  return (
    <TabScreen>
      <Head>
        <title>Rabbbit</title>
        <meta name="description" content="Rabbbit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </TabScreen>
  );
};

export default Home;
