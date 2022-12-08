import Head from "next/head";
import React, { useState } from "react";
import MainButton from "../../components/button/MainButton";
import DashBoardLayout from "../../components/DashBoardLayout";
import MonthOverview from "../../components/payroll/MonthOverview";
import PayrollDashboard from "../../components/payroll/PayrollDashboard";
import PayrollInputs from "../../components/payroll/PayrollInputs";

const Overview = () => {
  const [processing, setProcessing] = useState(false);

  function handleProcessing() {
    setProcessing(!processing);
  }
  return (
    <div className="relative grid bg-fuchsia-400  w-full min-h-[85vh] text-darkGray  p-2 ">
      <Head>
        <title>Payroll Overview</title>
        <meta
          name="description"
          content="Payroll summary and processing page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-col gap-4 bg-lime-500">
        {/* Month Lists */}
        <MonthOverview />

        {/* Second Line Container */}
        <div className="flex justify-between p-2 bg-teal-100 rounded-md h-fit">
          <div className="my-auto font-semibold ">December 2022</div>
          <div className="my-auto ">
            <MainButton
              bgColor={"yellow"}
              text={"Process Payroll"}
              onClick={handleProcessing}
            />
          </div>
        </div>
        {/* Dashboard/Inputs Container */}
        <div className="bg-red-400">
          {processing ? <PayrollInputs /> : <PayrollDashboard />}
        </div>
      </main>
    </div>
  );
};

Overview.getLayout = function (page) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};

export default Overview;
