import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
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
          Accommodation will be provided in additional charge basis.
          Accommodation shall be provided only to the outstation participants on
          prior request.
        </div>
        <div className="space-y-2 mt-6">
          <p>Single Room with Attach Bath & A/C : Rs.2240 /Day</p>
          <p>Double Room with Attach Bath & A/C : Rs.2464 /Day</p>
          <p>Non A/C Sharing without Attach Bath : Rs.280/Day </p>
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

export default function FAQ() {
  return (
    <section className="max-w-7xl w-full mx-auto mt-4 px-4">
      <div className="flex items-center gap-8">
        <div className="font-barlow font-semibold uppercase text-primary text-4xl whitespace-nowrap my-8">
          Frequently Asked Questions
        </div>
        <div className="hidden sm:block w-full">
          <Separator className="bg-primary h-2 rounded-2xl" />
        </div>
      </div>
      {questions.map(({ title, content }, index) => (
        <Accordion key={index} type="single" collapsible>
          <AccordionItem value={`item-${index + 1}`}>
            <AccordionTrigger className="text-left">{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </section>
  );
}
