import React, { useEffect } from "react";
import DashBoardLayout from "../../components/DashBoardLayout";
import { getAllEmployees } from "../../feature/employee/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";
import Head from "next/head";

const EmployeeDirectory = () => {
  const dispatch = useDispatch();
  const { allEmployees } = useSelector((state) => state.employee);

  useEffect(() => {
    dispatch(getAllEmployees());
  }, []);
  return (
    <main className="w-fill min-h-[85vh] ">
      <Head>
        <title>Employee Directory</title>
        <meta
          name="description"
          content="List of all employees and selected information"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Table
        cellBordered
        rowHeight={34}
        affixHeader
        virtualized
        data={allEmployees}
        fillHeight
      >
        <Column width={100} sortable fixed resizable fullText>
          <HeaderCell>E/No</HeaderCell>
          <Cell dataKey="employeeNumber" />
        </Column>

        <Column width={200} sortable resizable fullText>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>
        <Column width={100} sortable resizable fullText>
          <HeaderCell>DOJ</HeaderCell>
          <Cell dataKey="dateOfJoining" />
        </Column>
        <Column flexGrow={1} sortable resizable fullText>
          <HeaderCell>Mobile No</HeaderCell>
          <Cell dataKey="mobileNumber" />
        </Column>
        <Column flexGrow={1} sortable resizable fullText>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>
        <Column flexGrow={1} sortable resizable fullText>
          <HeaderCell>Basic Salary</HeaderCell>
          <Cell dataKey="basicSalary" />
        </Column>
        <Column flexGrow={1} sortable resizable fullText>
          <HeaderCell>Status</HeaderCell>
          <Cell dataKey="employmentType" />
        </Column>

        {/* <Column width={100} sortable resizable>
        <HeaderCell>Email</HeaderCell>
        <Cell>
          {(rowData, rowIndex) => {
            return <a href={`mailto:${rowData.email}`}>{rowData.email}</a>;
          }}
        </Cell>
      </Column> */}

        {/* <Column width={100} resizable>
        <HeaderCell>Avartar</HeaderCell>
        <ImageCell dataKey="avartar" />
      </Column> */}
      </Table>
    </main>
  );
};

EmployeeDirectory.getLayout = function (page) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};

export default EmployeeDirectory;
