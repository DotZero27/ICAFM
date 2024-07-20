import { Separator } from "@/components/ui/separator";
import { TOPICS } from "@/config";

import Logo from "@/assets/logoWhite.svg";

import HomeBanner from "@/assets/homeBanner.jpeg";
import Image from "next/image";

import Book from "@/assets/images/book.jpg";

export default function PublicationsAndAwards() {
  return (
    <>
      <div className="relative">
        <Image
          src={HomeBanner}
          className="w-full h-[28vh] aspect-video object-cover absolute -z-20"
          alt="homeBanner"
        />
        <div className="absolute bg-primary opacity-70 w-full h-[28vh] -z-10" />
        <div className="flex items-center justify-center text-white text-7xl sm:text-8xl z-10 h-[28vh] font-barlow font-bold">
          PUBLICATIONS AND AWARDS
        </div>
      </div>

      <section className="max-w-7xl w-full mx-auto space-y-24 text-lg text-[#949494] mt-4 text-justify">
        <div>
          <div className="flex items-center gap-8">
            <div className="font-barlow font-semibold uppercase text-primary text-4xl whitespace-nowrap my-8">
              Publication
            </div>
            <div className="w-full">
              <Separator className="bg-primary h-2 rounded-2xl" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              Manuscripts submitted will be peer-reviewed as per journal
              criteria and accepted manuscripts will be published in the special
              issue of the following Scopus-indexed journal(s). Information
              about the journal and its scope can be found here:

              Physica B: Condensed Matter (Impact Factor 2.8)


            </div>
            <div className="row-start-2 text-primary font-bold mt-10">
              Selected papers will be published in Scopus/Web of Science indexed
              Journals.
            </div>
            <div className="flex gap-2 col-start-2 row-span-2">
              <div className="flex items-center justify-center bg-primary w-full rounded-lg text-white">

              <Image src={Book} className="w-24 antialiased " alt="book" />

              </div>

            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-8">
            <div className="font-barlow font-semibold uppercase text-primary text-4xl whitespace-nowrap my-8">
              Awards
            </div>
            <div className="w-full">
              <Separator className="bg-primary h-2 rounded-2xl" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              Cash award with the certificates for best oral and poster
              presentations will be awarded by Sri Sivasubramaniya Nadar College
              of Engineering.
            </div>
            <div className="row-start-2 text-primary font-bold mt-10">
              {"=>"} Winners will be announced during the valedictory function
              on October 19, 2024
            </div>
            <div className="flex flex-col gap-2 col-start-2 row-span-2 bg-primary rounded-lg items-center justify-center">
              <div className="flex flex-col gap-2 items-center justify-center max-w-xs py-28 w-full mx-auto">
                <div className="font-burlow text-white">AWARDS</div>
                <div className="flex gap-2">
                  <Image src={Logo} className="w-20 antialiased " alt="logo" />
                  <div className="font-barlow border-l border-white px-2 text-3xl text-white">
                    ICAFM-2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-8">
            <div className="font-barlow font-semibold uppercase text-primary text-4xl whitespace-nowrap my-8">
              Important Announcement
            </div>
            <div className="w-full">
              <Separator className="bg-primary h-2 rounded-2xl" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="row-span-4 border border-primary px-10 py-12 rounded-lg">
              <div className="font-barlow uppercase text-primary text-4xl font-bold mb-8">
                Topics avalible for the Conf.
              </div>
              <ul>
                {TOPICS.map((topic, index) => (
                  <li
                    key={index}
                    className="ml-4 list-item list-disc text-lg leading-loose"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div className="row-span-2 bg-primary px-10 py-12 text-white rounded-lg">
              <div className="font-barlow font-bold text-4xl mb-6">
                KEY-DATES
              </div>
              <div className="flex flex-col gap-4 justify-between text-xl">
                <div className="flex justify-between">
                  Deadline for the Submission of abstract
                  <span className="font-bold">05.10.2024</span>
                </div>
                <div className="flex justify-between">
                  Notification of Acceptance
                  <span className="font-bold">10.10.2024 </span>
                </div>
                <div className="flex justify-between">
                  Registration Closing Date
                  <span className="font-bold">15.10.2024</span>
                </div>
                <div className="flex justify-between">
                  Conference
                  <span className="font-bold">17 - 19 October 2024</span>
                </div>
              </div>
            </div>
            <div className="row-span-2 bg-primary px-10 py-12 text-white rounded-lg">
              <div className="font-barlow font-bold text-4xl mb-6">
                REGISTRATION
              </div>
              <div className="flex flex-col gap-8 justify-between text-lg lg:text-xl">
                <div className="space-y-4">
                  <div className="font-bold">National:</div>
                  <div className="flex flex-col lg:flex-row justify-between">
                    Student/Research scholars
                    <span className="font-bold">Rs. 500/- </span>
                  </div>
                  <div className="flex justify-between">
                    Faculty members/Research Faculty
                    <span className="font-bold">Rs. 1000/- </span>
                  </div>
                  <div className="flex justify-between">
                    Industry participants
                    <span className="font-bold">Rs. 1500/- </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="font-bold">International:</div>
                  <div className="flex justify-between">
                    Student/Research scholars
                    <span className="font-bold">$20</span>
                  </div>
                  <div className="flex justify-between">
                    Faculty members
                    <span className="font-bold">$40</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
