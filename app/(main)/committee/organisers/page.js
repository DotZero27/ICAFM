import HomeBanner from "@/assets/homeBanner.jpeg";
import Image from "next/image";

import Founder from "@/assets/images/founder.png";
import Principal from "@/assets/images/principal.png";
import President from "@/assets/images/president.png";

import P_Ramasamy from "@/assets/images/organisers/p-ramasamy.jpg";
import Kennedy from "@/assets/images/organisers/kennedy.webp";
import Radha from "@/assets/images/organisers/radha.jpeg";
import Convener from "@/assets/images/organisers/convener.webp";

const COPATRONS = [
  {
    name: "Prof. V. E. Annamalai",
    designation: "Principal, SSN College of Engineering",
    image: Principal,
  },
  {
    name: "Prof. S. Radha",
    designation: "Vice Principal, SSN College of Engineering",
    image: Radha,
  },
  {
    name: "Prof. P. Ramasamy",
    designation: "Dean (Research), SSN College of Engineering",
    image: P_Ramasamy,
  },
];

const COORDINATOR = [
  {
    name: "Prof. S.M.M. Kennedy ",
    designation: "Head, Department of Physics, SSN College of Engineering",
    image: Kennedy,
  },
];

const CONVENER = [
  {
    name: "Dr. G. ANANDHA BABU",
    designation: (
      <>
        Department of Physics <br /> SSN College of Engineering
      </>
    ),
    image: Convener,
  },
];

export default function CommitteeOrganiser() {
  return (
    <section>
      <div className="relative">
        <Image
          src={HomeBanner}
          className="w-full h-[28vh] aspect-video object-cover absolute -z-20"
          alt="homeBanner"
        />
        <div className="absolute bg-primary opacity-70 w-full h-[28vh] -z-10" />
        <div className="flex flex-col items-center justify-center text-white text-7xl sm:text-8xl z-10 h-[28vh] font-barlow uppercase font-bold tracking-wide">
          <div className="font-normal text-xl sm:text-4xl">Organisers</div>
          Committee
        </div>
      </div>

      <div className="flex flex-col gap-10 md:flex-row justify-center max-w-7xl w-full mx-auto m-16 px-4 text-xl leading-loose sm:gap-24">
        <div className="grid grid-cols-[1fr_1.9fr] sm:grid-cols-[1fr_2.8fr]">
          <div className="col-span-2 flex justify-between items-end bg-primary rounded-xl gap-8">
            <div className="font-barlow text-white font-bold left text-5xl py-16 px-10">
              CHIEF PATRON
            </div>
            <Image src={Founder} alt="founder" />
          </div>
          <div className="col-start-2 mt-4">
            <div className="text-2xl">Dr. Shiv Nadar</div>
            <div className="text-base">Founder, SSN Institutions</div>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1.9fr] sm:grid-cols-[1fr_2.8fr]">
          <div className="col-span-2 flex justify-between items-end bg-primary rounded-xl sm:gap-8 ">
            <div className="font-barlow text-white font-bold left text-5xl py-32 px-10">
              PATRON
            </div>
            <Image src={President} alt="president" />
          </div>
          <div className="col-start-2 mt-4">
            <div className="text-2xl">Dr.Kala Vijayakumar</div>
            <div className="text-base">President, SSN Institutions</div>
          </div>
        </div>
      </div>

      <div className="px-4 max-w-7xl w-full mx-auto mt-8 sm:px-16">
        <div className="font-barlow text-primary font-bold text-5xl">
          CO-PATRONS
        </div>
        <div className="sm:flex justify-between w-full gap-4 border-l-4 border-primary pl-16 ml-4 sm:ml-7 mt-8">
          {COPATRONS.map(({ name, designation, image }, index) => (
            <div key={index}>
              <Image
                src={image || Principal}
                alt="copatron_image"
                className="w-[300px] h-[350px]"
              />
              <div className="py-4">
                <div className="text-2xl">{name}</div>
                <div className="font-light">{designation} </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="gap-10 sm:gap-0 sm:flex justify-between max-w-7xl w-full mx-auto mt-10 sm:mt-20">
        <div className="px-4 mt-4 sm:px-16">
          <div className="font-barlow text-primary font-bold text-5xl">
            CO-ORDINATOR
          </div>
          <div className="flex justify-between w-full gap-4 border-l-4 border-primary pl-16 ml-4 sm:ml-7 mt-8">
            {COORDINATOR.map(({ name, designation, image }, index) => (
              <div key={index}>
                <Image
                  src={image || Principal}
                  alt="coordinator_image"
                  className="w-[300px] h-[350px]"
                />
                <div className="py-4">
                  <div className="text-2xl">{name}</div>
                  <div className="font-light">{designation} </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 mt-4 sm:px-16">
          <div className="font-barlow text-primary font-bold text-5xl">
            CONVENER
          </div>
          <div className="flex justify-between w-full gap-4 border-l-4 border-primary pl-16 ml-4 sm:ml-7 mt-8">
            {CONVENER.map(({ name, designation, image }, index) => (
              <div key={index}>
                <Image
                  src={image || Principal}
                  alt="convener_image"
                  className="w-[300px] h-[350px]"
                />
                <div className="py-4">
                  <div className="text-2xl">{name}</div>
                  <div className="font-light">{designation} </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
