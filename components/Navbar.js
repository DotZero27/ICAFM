import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logoWhite.svg";
import { NavMenu } from "./NavMenu";
import { MobileNav } from "./MobileNav";

export default function Navbar() {
  return (
    <nav className="z-50">
      {/* Above nav */}
      <div className="flex justify-center gap-4 text-primary py-5 sm:px-16">
        <div className="flex items-center justify-center font-barlow border-r-[2px] border-primary px-4 text-2xl sm:text-5xl">
          ICAFM-2024
        </div>
        <div className="font-bold sm:text-xl">
          3<sup className="text-xs">RD</sup> INTERNATIONAL CONFERENCE ON
          <br /> ADVANCED FUNCTIONAL MATERIALS
        </div>
      </div>

      <div className="flex justify-between items-center lg:items-start bg-primary px-16">
        <Link href="/" className="flex items-center gap-2 py-5">
          <Image src={Logo} className="w-16 antialiased " alt="logo" />
          <div className="font-barlow border-l border-white px-2 text-3xl text-white">
            ICAFM-2024
          </div>
        </Link>

        <NavMenu />

        <MobileNav />
      </div>
    </nav>
  );
}
