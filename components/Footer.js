import Image from "next/image";

import Logo from "@/assets/logo.svg";
import s1 from "@/assets/images/sponsor1.jpg";
import s2 from "@/assets/images/sponsor2.jpg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center py-8 px-16 border-t border-primary mt-8">
      <div>
        <Image src={Logo} className="w-28 mb-4" alt="footerLogo" />
        <div>Copyright © 2024 SSN | ICAFM. All Rights Reserved</div>
      </div>

      <div className="w-1/4">
        <div className="font-bold text-2xl text-primary mb-4">Sponsors</div>
        <div className="flex gap-12 items-center text-sm">
          <Link href={"#"}>
            <Image src={s1} className="w-28 h-16 mb-4" alt="sponsor1" />
            {/* <div>Name</div> */}
          </Link>
          <Link href={"#"}>
            <Image src={s2} className="w-24 h-20 mb-4" alt="sponsor2" />
            {/* <div>Name</div> */}
          </Link>
        </div>
      </div>
    </footer>
  );
}
