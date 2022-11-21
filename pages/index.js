import Head from "next/head";
import DashBoardLayout from "../components/DashBoardLayout";

export default function Home() {
  return (
    <div className="relative grid">
      <Head>
        <title>Tax In Ethiopia</title>
        <meta name="description" content="Built to help HR personnel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="relative grid gap-4 top-28 "></div>
      </main>
    </div>
  );
}

Home.getLayout = function (page) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};
