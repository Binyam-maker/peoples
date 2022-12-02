import React, { useState } from "react";
import Image from "next/image";
import main_features_data from "../libs/main_features_data";
import { useSelector } from "react-redux";
import Link from "next/link";
function MainNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { currentFeature } = useSelector((store) => store.home);

  const featureData = main_features_data.find(
    (feature) => feature.title === currentFeature
  );

  return (
    <div className=" fixed left-1/2 -translate-x-1/2 z-10 flex  w-screen gap-4 p-4 align-middle bg-white border shadow-lg overflow-hidden">
      {/* Logo */}
      {/* <div className="relative  left-4 m-2 hover:cursor-pointer">
        <Image
          src={"/images/logo_placeholder.png"}
          alt="Your company's logo"
          width={100}
          height={100}
        />
      </div> */}

      {/* Sub-features List */}
      <div className="grid  relative left-1/2 -translate-x-1/2 ">
        <div className="w-full text-center font-serif font-semibold text-blue-700">
          Company Name
        </div>

        <div className="grid grid-cols-3 md:flex gap-4 text-[#00A1f2] border-t-2   ">
          {featureData &&
            featureData.components.map(({ name, link }, i) => (
              <div>
                <Link
                  href={link}
                  className="hover:scale-105 transition"
                  key={name}
                >
                  {name}
                </Link>
                {showMenu && <div>hello</div>}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;
