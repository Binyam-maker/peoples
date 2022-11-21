import Head from "next/head";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import RecentArticles from "../components/RecentArticles";
import ServicesContainer from "../components/ServicesContainer";
import DifferencesSlider from "../components/DifferencesSlider";
import ServicesListFooter from "../components/ServicesListFooter";
import EmailSubscription from "../components/EmailSubscription";
import ConnectWithUs from "../components/ConnectWithUs";

export default function Home() {
  return (
    <div className="relative grid">
      <Head>
        <title>Tax In Ethiopia</title>
        <meta name="description" content="Built to help HR personnel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <div className="relative grid gap-4 top-28 ">
          <div className="container mx-auto">
            <Banner />
            <ServicesContainer />
          </div>
          <DifferencesSlider />
        </div>
      </main>

      <footer className="relative grid justify-center grid-cols-2 text-sm text-white bg-slate-800 top-28 md:flex">
        <RecentArticles />
        <ServicesListFooter />
        <EmailSubscription />
        <ConnectWithUs />
      </footer>
    </div>
  );
}
