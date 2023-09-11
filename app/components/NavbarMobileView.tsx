import React, { useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { TfiClose } from "react-icons/tfi";
import NavbarLink from "./NavbarLink";

export default function NavbarMobileView({
  navigation,
}: {
  navigation: Navigation[];
}) {
  const [showToggle, setShowToggle] = useState<Boolean>(false);

  const ChangeShowToggleNavbar: React.MouseEventHandler<
    HTMLDivElement
  > = () => {
    setShowToggle(!showToggle);
  };

  return (
    <div>
      <div className="flex md:hidden justify-between items-center w-full mt-4 px-4">
        <h2 className="text-white font-semibold text-xl">Movies</h2>
        {!showToggle && (
          <LiaBarsSolid
            onClick={ChangeShowToggleNavbar}
            className="w-12 h-12 text-white cursor-pointer"
          />
        )}
      </div>
      {showToggle && (
        <div className="w-full h-screen md:hidden fixed z-30 top-0 bg-main/60">
          <TfiClose
            onClick={ChangeShowToggleNavbar}
            className="w-8 h-8 text-white cursor-pointer absolute right-4 top-4"
          />
          <ul className="fixed top-0 pt-40 bg-main w-4/5 h-screen border-r md:hidden text-base pl-8 py-10 border-b-[0.2px] z-50">
            {navigation.map((item) => {
              return <NavbarLink key={item.id} item={item} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
