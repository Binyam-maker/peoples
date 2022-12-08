import Head from "next/head";
import React from "react";
import DashBoardLayout from "../../components/DashBoardLayout";

const FinishedPayroll = () => {
  return (
    <div>
      <Head>
        <title>Finished Payroll</title>
        <meta
          name="description"
          content="Display results of processed payrolls."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-amber-900">
        <div>hello</div>
      </main>
    </div>
  );
};

FinishedPayroll.getLayout = function (page) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};
export default FinishedPayroll;
