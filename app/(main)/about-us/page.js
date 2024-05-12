import HomeBanner from "@/assets/homeBanner.jpeg";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section>
      <div className="relative">
        <Image
          src={HomeBanner}
          className="w-full h-[28vh] aspect-video object-cover absolute -z-20"
          alt="homeBanner"
        />
        <div className="absolute bg-primary opacity-70 w-full h-[28vh] -z-10" />
        <div className="flex items-center justify-center text-white text-7xl sm:text-8xl z-10 h-[28vh] font-barlow font-bold">
          ABOUT
        </div>
      </div>

      <div className="flex flex-col gap-y-24 max-w-7xl w-full mx-auto m-16 px-2 text-xl leading-loose">
        <div id="ssn">
          <div className="font-barlow font-bold uppercase text-white bg-primary rounded-xl text-4xl p-8 px-16">
            About the college SSN
          </div>
          <div className="mt-8 space-y-8 mx-4 xl:mx-16">
            <div className="w-full bg-[#D9D9D9] h-[35vh] rounded-xl" />
            <div className="space-y-8">
              <div>
                Sri Sivasubramaniya Nadar College of Engineering (SSN), an
                autonomous institution affiliated to Anna university, founded by
                Dr. Shiv Nadar, Chairman of HCL Technologies, is a philanthropic
                venture to give back to the society that nurtured him. SSN has
                been highly ranked and very reputed educational institution in
                Tamilnadu, India, stands out as a premier center of higher
                learning with a mission of pursuing excellence in education and
                research. The institution, with their diverse and dynamic
                community of students, offers a distinctive combination of some
                of the finest graduate, undergraduate and research programs,
                accomplished faculty, world-class facilities, and a residential
                campus set on a sprawling 250 acres.
              </div>
              <div>
                SSN is accredited by NAAC with A+ grade. Within a span of 25
                years, SSN has grown into one of the top educational
                institutions in the country and became an autonomous institute
                in the year 2018. Some of the salient features of SSN are:
                Ranked 45th in Engineering Category and 80th among all
                educational institutions in India Rankings 2023 by NIRF, MHRD;
                The state-of-the-art infrastructure with over 1.8 million square
                feet of buildings; Spacious hostels, Sports facilities and
                faculty quarters within the campus.
              </div>
            </div>
          </div>
        </div>

        <div id="department">
          <div className="font-barlow font-bold uppercase text-white bg-primary rounded-xl text-4xl p-8 px-16">
            About the Department
          </div>
          <div className="mt-8 space-y-8 mx-4 xl:mx-16">
            <div className="w-full bg-[#D9D9D9] h-[35vh] rounded-xl" />
            <div className="space-y-8">
              The Department of Physics was established in 1996. The Department
              has established Center for Crystal Growth in 2005, Optical Network
              lab in 2006, Luminescence Research lab in 2013, Functional
              Materials lab in 2015 and Center for Radiation, Environmental
              Science and Technology in 2015 for conducting active research. The
              faculty members of the department are executing many projects from
              DST, SERB, DAE-BRNS, DRDO, CSIR, MNRE, NRB and UGC- DAE-CSR. More
              than 75 full time research scholars are pursuing their doctorate
              degree with Anna university registration.
            </div>
          </div>
        </div>

        <div id="conference">
          <div className="font-barlow font-bold uppercase text-white bg-primary rounded-xl text-4xl p-8 px-16">
            About the Conference
          </div>
          <div className="mt-8 space-y-8 mx-4 xl:mx-16">
            <div className="w-full bg-[#D9D9D9] h-[35vh] rounded-xl" />
            <div className="space-y-8">
              International conference on ‘Advanced Functional Materials’ is
              aimed at bringing together the scientists and experts to provide a
              common platform for sharing their scientific results, thoughts and
              ideas. The event would comprise of invited lectures, contributed
              oral and poster presentations covering the latest works of the
              Materials Science community from all over the world. The main
              projection of the conference is to provide a forum for the
              participants to explore the latest developments in the field of
              ‘advanced functional materials’ and to evolve guidelines for their
              further research in India/Overseas.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
