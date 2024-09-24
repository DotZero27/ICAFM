import { Separator } from "@/components/ui/separator";
import { TOPICS } from "@/config";
import Link from "next/link";

export default function Registration() {
  return (
    <section className="max-w-7xl w-full mx-auto mt-4 px-4">
      <div className="flex items-center gap-8">
        <div className="font-barlow font-semibold uppercase text-primary text-4xl whitespace-nowrap my-8">
          Registration
        </div>
        <div className="w-full">
          <Separator className="bg-primary h-2 rounded-2xl" />
        </div>
      </div>

      <div className="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-20 my-8 text-xl">
        <div>
          <div className="text-primary font-bold text-2xl">National:</div>
          <div className="space-y-2 mt-2">
            <div className="flex justify-between">
              Student/Research scholars
              <span className="font-bold text-primary">Rs. 2000/-</span>
            </div>
            <div className="flex justify-between">
              Faculty members/Research Faculty
              <span className="font-bold text-primary">Rs. 2500/-</span>
            </div>
            <div className="flex justify-between">
              Industry participants
              <span className="font-bold text-primary">Rs. 4000/-</span>
            </div>
          </div>
        </div>
        <div>
          <div className="text-primary font-bold text-2xl">International:</div>
          <div className="space-y-2 mt-2">
            <div className="flex justify-between">
              Student/Research scholars
              <span className="font-bold text-primary">$ 50</span>
            </div>
            <div className="flex justify-between">
              Faculty Members
              <span className="font-bold text-primary">$ 100</span>
            </div>
          </div>
        </div>
      </div>

      <div className="my-16">
        <Link href="https://forms.gle/9fhNqXtdYM4fb7dF8" className="bg-primary text-white px-8 py-4 text-lg uppercase rounded-lg">
          Register here
        </Link>
      </div>

      <div>
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
              Topics
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
            <div className="font-barlow font-bold text-4xl mb-6">KEY-DATES</div>
            <div className="flex flex-col gap-4 justify-between text-lg">
              <div className="flex justify-between">
                Deadline for the Submission of abstract
                <span className="font-bold">05.10.2024</span>
              </div>
              <div className="flex justify-between">
                Notification of Acceptance
                <span className="font-bold">15.09.2024 Onwards</span>
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
              ACCOMMODATION
            </div>
            <div className="flex flex-col gap-8 justify-between text-lg">
              <div>
                Accommodation will be provided in additional charge basis.
                Accommodation shall be provided only to the outstation participants on prior request.

              </div>

              <div className="space-y-2">
                
                <div className="flex justify-between">
                  Single Room with Attach Bath & A/C
                  <span className="font-bold">Rs.1150 per day</span>
                </div>
                <div className="flex justify-between">
                  Double Room with Attach Bath & A/C
                  <span className="font-bold">Rs.1250 per day</span>
                </div>
                <div className="flex justify-between">
                  Non A/C Sharing without Attach Bath
                  <span className="font-bold">Rs. 280 per day</span>
                </div>
              </div>

              {/*<div className="space-y-2">
                <div className="font-bold">Men{"'"}s hostel:</div>
                <div className="flex justify-between">
                  Dormitory Charges:
                  <span className="font-bold">Rs 441 <br/> (per day per person)</span>
                </div>
              </div>*/}
            </div>
          </div>





          <div className="row-span-2 bg-primary px-10 py-12 text-white rounded-lg col-start-2">
            <div className="font-barlow font-bold text-4xl mb-6">
              FINANCIAL ASSISTANCE
            </div>
            <div className="flex flex-col gap-8 justify-between text-lg">
              <div>
                Sleeper class train fare by the shortest route may be provided on request to a few deserving
                research students and post-docs presenting their papers. Participants attending the conference
                for all 3 days will be eligible for financial assistance.

              </div>
            </div>
          </div>

























































        </div>
      </div>
    </section>
  );
}
