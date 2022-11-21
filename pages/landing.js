import React from "react";
import Head from "next/head";
import Banner from "../components/Banner";
import ServicesContainer from "../components/ServicesContainer";
import DifferencesSlider from "../components/DifferencesSlider";

const landing = () => {
  return (
    <div className="relative grid">
      <Head>
        <title>Tax In Ethiopia</title>
        <meta name="description" content="Built to help HR personnel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="relative grid gap-4 top-28 ">
          <div className="container mx-auto">
            <Banner />
            <ServicesContainer />
          </div>
          <DifferencesSlider />
        </div>
      </main>
    </div>
  );
};

export default landing;