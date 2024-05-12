import HomeBanner from "@/assets/homeBanner.jpeg";
import Image from "next/image";

const LOCAL_MEMBERS = [
  "Dr. Julie Charles",
  "Dr. S. Singaravadivelu",
  "Dr. P. Rajesh",
  "Dr. A. Chandrasekaran",
  "Dr. P. Nagapandiselvi",
];

export default function CommitteeLocal() {
  return (
    <>
      <div className="relative">
        <Image
          src={HomeBanner}
          className="w-full h-[28vh] aspect-video object-cover absolute -z-20"
          alt="homeBanner"
        />
        <div className="absolute bg-primary opacity-70 w-full h-[28vh] -z-10" />
        <div className="flex flex-col items-center justify-center text-white text-7xl sm:text-8xl z-10 h-[28vh] font-barlow uppercase font-bold tracking-wide">
          <div className="font-normal text-xl sm:text-4xl">Local</div>
          Committee
        </div>
      </div>

      <section className="max-w-7xl mx-auto w-full my-16 px-4">
        <div>
          <div className="text-primary font-barlow uppercase text-5xl font-bold mb-4">
            LOCAL ORGANIZING COMMITTEE
          </div>
          <ul className="border-l-4 border-primary ml-4 sm:ml-12 pl-10">
            {LOCAL_MEMBERS.map((member, index) => (
              <li
                key={index}
                className="ml-4 list-item list-disc text-lg leading-[2.5]"
              >
                {member}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
