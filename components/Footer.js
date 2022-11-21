import React from "react";
import ConnectWithUs from "./ConnectWithUs";
import EmailSubscription from "./EmailSubscription";
import RecentArticles from "./RecentArticles";
import ServicesListFooter from "./ServicesListFooter";

const Footer = () => {
  return (
    <footer className="relative grid justify-center grid-cols-2 text-sm text-white bg-slate-800 top-28 md:flex">
      <RecentArticles />
      <ServicesListFooter />
      <EmailSubscription />
      <ConnectWithUs />
    </footer>
  );
};

export default Footer;
