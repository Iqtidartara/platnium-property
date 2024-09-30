import { BiBorderAll, BiSupport, BiCalendarAlt } from "react-icons/bi";
import { FaRegMoneyBill1 } from "react-icons/fa6";

import { MdOutlineFolderCopy } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { RxMixerHorizontal } from "react-icons/rx";
import { Settings, Verified } from "lucide-react";

// Define the type for each link object
interface LinkItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const Sidebar: React.FC = () => {
  // Define an array of link objects with type safety and icon paths
  const links: LinkItem[] = [
    { href: "/dashboard", label: "Dashboard", icon: <BiBorderAll /> },
    { href: "/input", label: "Input", icon: <BiCalendarAlt />},
    {
      href: "/projected-capital-growth",
      label: "Projected Capital Growth",
      icon: <MdOutlineFolderCopy />,
    },
    {
      href: "/mortgage",
      label: "Mortgage Calculator",
      icon: <RxMixerHorizontal />,
    },
    {
      href: "/construction-payments",
      label: "Construction Payments",
      icon: <FaRegMoneyBill1 />,
    },
  ];

  return (
    <section className="bg-[fff] text-[#0A0D14] w-[25%] h-screen flex flex-col justify-between">
      {/* Logo and Branding */}
      <div className="flex items-center gap-3 p-4 bg-[#fff]">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">PLATINUM PROPERTY</h3>
          <span className="text-sm text-gray-400">Investment Group</span>
        </div>
      </div>

      {/* Main Links */}
      <div className="flex-grow px-4 py-6">
        <h1 className="text-gray-500 text-sm font-medium mb-3">MAIN</h1>
        <nav>
          <ul>
            {links.map((link, index) => (
              <li key={index} className="mb-2">
                <Link
                  href={link.href}
                  passHref
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#525866] hover:text-white hover:bg-gray-700 transition duration-200"
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Settings and Support Section */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-2 text-[#525866] hover:text-white cursor-pointer mb-3">
          <Settings className="w-5 h-5" />
          <span className="text-sm text-[#525866]">Settings</span>
        </div>
        <div className="flex items-center gap-2 text-[#525866] hover:text-white cursor-pointer">
          <BiSupport className="w-5 h-5 " />
          <span className="text-sm text-[#525866]">Support</span>
        </div>
      </div>

      {/* Footer with User Info */}
      <div className="flex items-center gap-3 p-4 bg-[#fff]">
        <Image src="/user.svg" width={40} height={40} alt="user" className="rounded-full" />
        <div className="flex flex-col">
          <h1 className="flex items-center gap-1 text-[#525866] font-semibold">
            Fred Van Urk <Verified className="w-4 h-4 text-blue-400" />
          </h1>
          <span className="text-xs text-[#525866]">fred@ppig.com.au</span>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
