import { Search } from "lucide-react";
import { Bell } from "lucide-react";
import Image from "next/image";
import React from "react";

const Topbar = () => {
  return (
    <section className="w-full">
      <main className="py-4 px-8">
        {/* main-div */}
        <div className="flex justify-between items-center">
          {/* first-div */}
          <div className="flex gap-6">
            {/* image */}
            <div>
              <Image src="/user.svg" alt="user" width={50} height={50} />
            </div>

            {/* data */}
            <div>
              <h2 className="text-[18px] text-md">Fred Van Urk</h2>
              <p className="text-[14px] text-semi-bold">
                Welcome back to Synergy 👋🏻
              </p>
            </div>
          </div>

          {/* second-div */}
          <div className="flex justify-center items-center gap-6">
            <Search />
            <Bell />

            {/* button */}
            <div>
              <button className=" flex justify-center items-center gap-1 text-md text-[14px] bg-[#375DFB] text-white px-4 py-3 rounded-2xl w-[155px] h-[40px]">
                <span className="text-[20px]">+</span> Create Request
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Topbar;
