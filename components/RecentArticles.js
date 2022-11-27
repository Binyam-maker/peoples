import React from "react";
import Article from "./Article";

const tempoArticle = [
  { title: "What is Payroll?", link: "/" },
  { title: "What is HRMS?", link: "/" },
  { title: "What is Statutory Compliance?", link: "/" },
  { title: "Guide to Leave Management", link: "/" },
  { title: "Guide to Attendance Management", link: "/" },
];

const RecentArticles = () => {
  return (
    <div className="grid gap-1 p-4">
      <h1 className="font-serif font-semibold ">Recent Articles</h1>
      {tempoArticle.map(({ title, link }) => {
        return <Article key={title} title={title} link={link} />;
      })}
    </div>
  );
};

export default RecentArticles;
