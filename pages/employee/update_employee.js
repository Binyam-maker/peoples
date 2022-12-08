import Head from "next/head";
import React from "react";
import DashBoardLayout from "../../components/DashBoardLayout";
import SearchComponent from "../../components/SearchComponent";
import AddUpdateEmployee from "../../components/employee/AddUpdateEmployee";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../feature/summary/summarySlice";
import SummaryModal from "../../components/SummaryModal";
import MainButton from "../../components/button/MainButton";

const UpdateEmployee = () => {
  const dispatch = useDispatch();
  const { entry } = useSelector((state) => state.employee);
  const { isModalOpen } = useSelector((state) => state.summary);
  const { selectedSearchResult } = useSelector((state) => state.search);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(openModal(entry));
  };
  return (
    <div className="relative grid  w-full min-h-[85vh]">
      <Head>
        <title>Update Employee</title>
        <meta name="description" content="Update employee data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid w-full place-self-start">
        <SearchComponent title={"Search Employee By Name"} />

        {/* Summary modal conditional rendering */}
        {isModalOpen && <SummaryModal />}

        {/* Updating Container */}
        <div className="grid justify-center gap-1">
          {/* If search item is selected render multi page form */}
          {Object.keys(selectedSearchResult).length > 0 ? (
            <div className="grid gap-4">
              {/* Multi page form */}
              <AddUpdateEmployee />

              {/* Submit button -> calls SummaryModal */}
              <div className="grid mt-8 place-items-center">
                <MainButton
                  onClick={handleSubmit}
                  type={"button"}
                  bgColor="blue"
                  text="Submit"
                />
              </div>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
};

UpdateEmployee.getLayout = function (page) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};
export default UpdateEmployee;
