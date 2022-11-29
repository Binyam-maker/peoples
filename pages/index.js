import Head from "next/head";
import Image from "next/image";
import DashBoardLayout from "../components/DashBoardLayout";
import Layout from "../components/Layout";
import chartOne from "../public/images/1.PNG";
import chartTwo from "../public/images/2.PNG";
import chartThree from "../public/images/3.PNG";
import chartFour from "../public/images/4.PNG";
import chartFive from "../public/images/5.PNG";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tax In Ethiopia</title>
        <meta name="description" content="Built to help HR personnel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="grid gap-4 grid-cols-1  p-8 md:grid-cols-2  ">
          <Image src={chartOne} />
          <Image src={chartTwo} />
          <Image src={chartThree} />
          <Image src={chartFour} />
          <Image src={chartFour} />
        </div>
      </main>
    </div>
  );
}

Home.getLayout = function (page) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};
