import React, { useState } from "react";
import Image from "next/image";
import main_features_data from "../libs/main_features_data";
import { useSelector } from "react-redux";
import Link from "next/link";
import { motion } from "framer-motion";

function MainNavbar() {
  // const [showMenu, setShowMenu] = useState(false);
  const { currentFeature } = useSelector((store) => store.home);

  const featureData = main_features_data.find(
    (feature) => feature.title === currentFeature
  );
  // fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

  const [shown, setShown] = useState(false);

  const showMenu = {
    enter: {
      opacity: 1,
      y: 0,
      display: "block",
    },
    exit: {
      y: -5,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <div className=" fixed left-1/2 -translate-x-1/2 z-10 flex  w-screen gap-4 p-4 align-middle bg-white border shadow-lg overflow-visible">
      {/* Logo */}
      <div className="">
        {/* <Image
          src={"/images/logo_placeholder.png"}
          alt="Your company's logo"
          width={100}
          height={100}
        /> */}
      </div>

      {/* Sub-features List */}
      <div className="grid  relative left-1/2 -translate-x-1/2 ">
        <div className="w-full text-center font-serif font-semibold text-blue-700">
          Company Name
        </div>

        <div className="grid grid-cols-3 md:flex gap-4 text-[#00A1f2] border-t-2   ">
          {featureData &&
            featureData.components.map(({ name, link, subMenu }, i) => {
              return (
                <div>
                  {!subMenu && (
                    <Link
                      href={link}
                      className={`hover:scale-105  transition`}
                      key={name}
                    >
                      {name}
                    </Link>
                  )}
                  {subMenu && (
                    <motion.div
                      onHoverStart={() => setShown(true)}
                      onHoverEnd={() => setShown(false)}
                    >
                      <span className="cursor-pointer">{name}</span>
                      <motion.ul
                        variants={showMenu}
                        initial="exit"
                        animate={shown ? "enter" : "exit"}
                        className="absolute bg-white mt-1 border border-blue-strong border-opacity-50 rounded-sm p-2  "
                      >
                        {subMenu.map(({ subName, link }) => {
                          return (
                            <Link href={link}>
                              <motion.li
                                whileHover={{
                                  color: "#FFB703",
                                  x: 2,
                                }}
                                className="cursor-pointer p-1 text-blue-primary"
                              >
                                {subName}
                              </motion.li>
                            </Link>
                          );
                        })}
                      </motion.ul>
                    </motion.div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;
