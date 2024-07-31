import Image from "next/image";

import Logo from "@/assets/logo.svg";
import s1 from "@/assets/images/sponsor1.jpg";
import s2 from "@/assets/images/sponsor2.jpg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-16 border-t border-primary mt-8">
      <div className="w-full mb-8">
        <div className="font-bold text-2xl text-primary text-center mb-4">Sponsors</div>
        <div className="text-sm">
          <marquee behavior="scroll" direction="right" className="w-full flex items-center">
            <Link href={"#"}>
              <Image src={s1} className="inline-block w-32 h-20 mb-4 mr-16" alt="sponsor1" />
            </Link>
            <Link href={"#"}>
              <Image src={s2} className="inline-block w-28 h-24 mb-4 mr-16" alt="sponsor2" />
            </Link>
          </marquee>
        </div>
      </div>

      <div className="w-full py-8 px-16 border-t border-primary mt-8"></div>

      <div className="w-full text-center">
        <Image src={Logo} className="w-28 mb-4 mx-auto" alt="footerLogo" />
        <div>Copyright © 2024 SSN | ICAFM. All Rights Reserved</div>
      </div>
    </footer>
  );
}
