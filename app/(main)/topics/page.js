import { Separator } from "@/components/ui/separator";
import { TOPICS } from "@/config";

export default function page() {
  return (
    <section className="max-w-7xl w-full mx-auto mt-4 px-4">
      <div className="flex items-center gap-8">
        <div className="font-barlow font-semibold uppercase text-primary text-4xl whitespace-nowrap my-8">
          Topics
        </div>
        <div className="hidden sm:block w-full">
          <Separator className="bg-primary h-2 rounded-2xl" />
        </div>
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

      <div className="space-y-4 lg:space-y-0 lg:grid grid-cols-2 gap-4 justify-between mt-8">
        <div className="bg-primary px-4 lg:px-10 py-12 text-white rounded-lg">
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
              Registration Closing Date
              <span className="font-bold">15.10.2024</span>
            </div>
            <div className="flex justify-between">
              Conference
              <span className="font-bold">17 - 19 October 2024</span>
            </div>
          </div>
        </div>
        <div className=" bg-primary px-10 py-12 text-white rounded-lg">
          <div className="font-barlow font-bold text-4xl mb-6">
            REGISTRATION
          </div>
          <div className="flex flex-col gap-8 justify-between text-lg lg:text-xl">
            <div className="space-y-4">
              <div className="font-bold">National:</div>
              <div className="flex flex-col lg:flex-row justify-between">
                Student/Research scholars
                <span className="font-bold">Rs. 2000/- </span>
              </div>
              <div className="flex justify-between">
                Faculty members/Research Faculty
                <span className="font-bold">Rs. 2500/- </span>
              </div>
              <div className="flex justify-between">
                Industry participants
                <span className="font-bold">Rs. 4000/- </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="font-bold">International:</div>
              <div className="flex justify-between">
                Student/Research scholars
                <span className="font-bold">$50</span>
              </div>
              <div className="flex justify-between">
                Faculty members
                <span className="font-bold">$100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
