import Image from "next/image";

import Logo from "@/assets/logo.svg";

export default function Footer() {
  return (
    <footer className="py-8 px-16 border-t border-primary mt-8">
      <Image src={Logo} className="w-28 mb-4" alt="footerLogo"/>
      <div>Copyright © 2024 SSN | ICAFM. All Rights  Reserved</div>
    </footer>
  );
}
