import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const questions = [
  {
    title: "Can I present two abstracts? ",
    content:
      "One can present more than one presentation provided the separate registration is done for both the work. ",
  },
  {
    title: "How can I register for the conference? ",
    content: (
      <div>
        Please visit the{" "}
        <Link href={"#"} className="underline">
          link
        </Link>{" "}
        to register for the conference.
      </div>
    ),
  },
  {
    title: "How to book accommodation? ",
    content: (
      <>
        <div>
          While registering for the conference please select the type of
          accommodation you need. The available accommodation and charges are
          mentioned below:
        </div>
        <div className="mt-2">
          <strong>Ladies hostel:</strong>
          <br /> Dorm Charges - Rs.389 per day (without cot) <br />2 Bed AC Room
          - Rs.725 per day
          <br /> 2 Bed Non-AC - Rs. 609 per day
        </div>

        <div className="mt-2">
          <strong>Men's hostel:</strong>
          <br />
          Dormitory Charges: Rs 441 (per day per person)
        </div>
      </>
    ),
  },
  { title: "Can I stay outside, if yes where? ", content: "Yes, you can." },
  {
    title: "How to Reach SSN ? ",
    content: (
      <>
        <div className="mb-2">
          <strong>Coming via Train:</strong>
          <br />
          The nearest railway station is Tambaram /MGR chennai central railway
          station.
        </div>
        <div className="my-2">
          <strong>via Flight:</strong>
          <br />
          The nearest airport is Chennai.
        </div>
      </>
    ),
  },
  {
    title: "What is the oral presentation timing? ",
    content:
      "Total time for the presentation is 12 minutes followed by 3 minutes of Q & A.",
  },
  {
    title: "What is the size of the poster? ",
    content: "Poster size should be 1 × 1 m2.",
  },
  {
    title: "What is the schedule for oral presentation? ",
    content:
      "You will be communicated with the schedule one week prior to the conference.",
  },
  {
    title: "If we participate, my paper will be published or not? ",
    content: "Manuscripts will undergo with due review process.",
  },
  {
    title: "Can any author present the abstract? ",
    content:
      "Yes, any of the listed authors can present the work if he/she is presenting only one. i.e., under one registration only one work can be presented.",
  },
  {
    title: "Can I submit two abstracts? ",
    content:
      "Yes, you can. For submitting the second abstract you need a second email id and a separate registration will be required to present the work.",
  },
  {
    title: "What is the abstract deadline and whether it will be extended?",
    content: (
      <>
        The abstract deadline is <strong>October 05, 2024</strong>. Update
        regarding the extension please visit the website.
      </>
    ),
  },
  { title: "What is the registration deadline? ", content: "15.10.2024" },
  {
    title: "What are the things included in the registration fee? ",
    content:
      "It contains the conference kit, conference working lunch, dinner, and snacks between the sessions.",
  },
  {
    title: "Where can I submit the full manuscript? ",
    content: (
      <>
        For those who opt for the publication, a separate email will be sent to
        them. The full manuscript submission will start on{" "}
        <strong>November 01, 2024</strong>.
      </>
    ),
  },
];

export default function page() {
  return (
    <div className="max-w-4xl w-full mx-auto">
      <h3 className="text-3xl font-bold my-6 text-primary">
        Frequently Asked Questions
      </h3>
      {questions.map(({ title, content }, index) => (
        <Accordion key={index} type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
