import HomeBanner from "@/assets/homeBanner.jpeg";
import Image from "next/image";



import Kennedy from "@/assets/images/organisers/kennedy.webp";
import Convener from "@/assets/images/organisers/convener.webp";



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
          <div className="font-normal text-xl sm:text-4xl">Organising</div>
          Committee
        </div>
      </div>
      <div className="gap-10 sm:gap-0 sm:flex justify-between max-w-7xl w-full mx-auto mt-10 sm:mt-20">
        <div className="px-4 mt-4 sm:px-16">
          <div className="font-barlow text-primary font-bold text-5xl">
            CHAIRMAN
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
