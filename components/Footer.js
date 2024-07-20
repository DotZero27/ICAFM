import Image from "next/image";

import Logo from "@/assets/logo.svg";
import s1 from "@/assets/images/sponsor1.jpg";
import s2 from "@/assets/images/sponsor2.jpg";


export default function Footer() {
  return (

    <footer className="py-8 px-16 border-t border-primary mt-8">
      <Image src={s1} className="w-28 mb-4" alt="sponsor1"/>
      <Image src={s2} className="w-28 mb-4" alt="sponsor2"/>
      <Image src={Logo} className="w-28 mb-4" alt="footerLogo"/>
      <div>Copyright © 2024 SSN | ICAFM. All Rights  Reserved</div>
    </footer>
  );
}
