import Head from "next/head";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DashBoardLayout from "../../components/DashBoardLayout";
import SearchComponent from "../../components/SearchComponent";
import { deleteEmployee } from "../../feature/employee/employeeSlice";
import { openModal } from "../../feature/summary/summarySlice";
import SummaryModal from "../../components/SummaryModal";
import MainButton from "../../components/button/MainButton";

const DeleteEmployee = () => {
  const {
    entry: { id },
    entry,
  } = useSelector((state) => state.employee);

  const dispatch = useDispatch();
  function handleDelete() {
    // dispatch(deleteEmployee(id));
    dispatch(openModal(entry));
  }
  const { isModalOpen } = useSelector((state) => state.summary);

  return (
    <div className="relative grid  w-full min-h-[85vh]">
      <Head>
        <title>Delete Employee </title>
        <meta name="description" content="Delete employee data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid w-full place-self-start">
        <SearchComponent title={"Search Employee By Name"} />
        {isModalOpen && <SummaryModal />}

        {id && (
          <div className="grid mt-8 place-items-center">
            <MainButton
              onClick={handleDelete}
              type={"button"}
              bgColor="red"
              text="Delete"
            />
          </div>
        )}
      </main>
    </div>
  );
};

DeleteEmployee.getLayout = function (page) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};
export default DeleteEmployee;
