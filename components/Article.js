import Link from "next/link";
import React from "react";

const Article = ({ title, link }) => {
  return (
    <Link href={link}>
      <h1>{title}</h1>
    </Link>
  );
};

export default Article;
