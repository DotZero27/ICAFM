import HomeBanner from "@/assets/homeBanner.jpeg";
import Image from "next/image";
import Link from "next/link";

import UserPic from "@/assets/images/founder.png";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TOPICS } from "@/config";

export default function Page() {
  return (
    <main>
      <section className="relative">
        <Image
          src={HomeBanner}
          className="w-full h-[65vh] aspect-video object-cover"
          alt="homeBanner"
        />

        <div className="absolute -bottom-[35%] left-0 w-full flex items-center justify-center">
          <div className="w-full bg-primary font-barlow font-bold  text-white text-7xl text-center mx-16 rounded-2xl py-28 pb-36 bg-bgImage bg-cover bg-no-repeat">
            <span className="font-normal text-5xl">WELCOME TO</span>
            <br />
            ICAFM-2024
          </div>
        </div>
      </section>
      <div className="h-[27vh]" />

      <div className="px-4 mx-auto space-y-24 lg:max-w-[80%] xl:px-16">
        <div className=" text-xl leading-relaxed text-justify">
          International conference on ‘Advanced Functional Materials’ is aimed
          at bringing together the scientists and experts to provide a common
          platform for sharing their scientific results, thoughts and ideas. The
          event would comprise of invited lectures, contributed oral and poster
          presentations covering the latest works of the Materials Science
          community from all over the world. The main projection of the
          conference is to provide a forum for the participants to explore the
          latest developments in the field of ‘advanced functional materials’
          and to evolve guidelines for their further research in India/Overseas.
        </div>

        {/* <div className="flex flex-col gap-14 lg:flex-row justify-between items-center bg-primary px-10 py-8 rounded-3xl">
          <div className="text-white space-y-2">
            <div className="text-4xl font-semibold">17-19th October 2024</div>
            <div className="text-sm">
              Sri Sivasubramaniya Nadar College of Engineering, Rajiv Gandhi
              Salai,
              <br />
              Kalavakkam - 603 110, Chennai, Tamilnadu, India
            </div>
          </div>
          <div>
            <Link
              href="#"
              className="text-primary bg-white rounded-2xl px-4 py-2 lg:px-14 lg:py-4 text-2xl uppercase"
            >
              Register here
            </Link>
          </div>
        </div> */}
      </div>

      <div className="text-white mt-20 px-2 lg:px-16 speaker-gradient">
        <div className="uppercase font-barlow text-6xl text-center py-8 lg:py-16">
          Speakers
        </div>
        <Separator className="my-20 bg-transparent" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 pb-10 max-w-7xl w-full mx-auto">
          {Array(8)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="flex flex-col gap-12 mb-40 pb-8 px-4 justify-between items-center relative border border-white bg-[#1060A3] rounded-xl max-w-xs w-full"
              >
                <div>
                  {/* Image */}
                  {/* <Image
                    src={UserPic}
                    className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl"
                  /> */}
                  <div className="w-[224px] h-[224px] absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-gray-600"/>
                  <div className="w-1 h-[100px]" />
                </div>
                <div className="text-center pb-4">
                  <div className="uppercase text-xl leading-8">
                    {/* Name */}
                    Speaker Name
                  </div>
                  <div className="text-sm">
                    {/* University from */}
                    Speaker University, Country
                  </div>
                </div>
                <Button className="bg-white text-black">View Details</Button>
              </div>
            ))}
        </div>
      </div>

      <div className="px-4 sm:px-16">
        <div className="flex items-center gap-8">
          <div className="font-barlow font-semibold uppercase text-primary text-4xl whitespace-nowrap my-8">
            Important Announcement
          </div>
          <div className="hidden sm:block w-full">
            <Separator className="bg-primary h-2 rounded-2xl" />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-2 space-y-4 lg:space-y-0">
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

          <div className="row-span-2 bg-primary px-4 lg:px-10 py-12 text-white rounded-lg">
            <div className="font-barlow font-bold text-4xl mb-6">KEY-DATES</div>
            <div className="flex flex-col gap-4 justify-between text-lg lg:text-xl">
              <div className="flex flex-col lg:flex-row justify-between">
                Deadline for the Submission of abstract
                <span className="font-bold">05.10.2024</span>
              </div>
              <div className="flex justify-between">
                Notification of Acceptance
                <span className="font-bold">15.09.2024 Onwards</span>
              </div>
              <div className="flex justify-between">
                Registration Start Date
                <span className="font-bold">01.09.2024</span>
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
            <div className="font-barlow font-bold text-4xl mb-6">REGISTRATION</div>
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
    </main>
  );
}
