import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logoWhite.svg";
import { NavMenu } from "./NavMenu";
import { MobileNav } from "./MobileNav";

export default function Navbar() {
  return (
    <nav className="sticky bg-primary flex justify-between items-center px-4 py-2 z-50">
      <Link href="/">
        <Image src={Logo} className="w-16 antialiased " alt="logo" />
      </Link>

      <MobileNav />
      <NavMenu />
    </nav>
  );
}
