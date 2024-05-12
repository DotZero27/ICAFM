import Image from "next/image"
import ConnectArrow from "@/assets/icons/connectArrow.svg"
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <div className="bg-primary px-8 py-10 sm:px-16 sm:py-20 my-8">
        <div className="flex justify-between items-center max-w-7xl w-full mx-auto">
          <div className="text-white text-4xl sm:text-6xl font-semibold font-barlow">Connect with Us</div>
          <Link href={"/registration"}>
          <Image src={ConnectArrow} alt="connectArrow"/>
          </Link>
        </div>
      </div>
    </>
  );
}
