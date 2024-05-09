import { Separator } from "@/components/ui/separator";
import { MapPin, Mail, Phone } from "lucide-react";

export default function page() {
  return (
    <section className="max-w-6xl w-full mx-auto">
      <h1 className="text-5xl font-bold my-8">Contact Us</h1>
      <Separator className="mb-8" />
      <div className=" flex gap-8">
        <div className="flex flex-col justify-around w-full">
          <div className="flex gap-8">
            <MapPin className="w-7 h-7" />
            <p>
              Sri Sivasubramaniya Nadar College of Engineering,
              <br /> Rajiv Gandhi Salai (OMR), Kalavakkam – 603 110, <br />
              Tamil Nadu, India Phone: 044 2746 9700
            </p>
          </div>
          <Separator />
          <div className="flex gap-8 items-center">
            <Mail className="w-7 h-7" />
            <p>icafm2024@ssn.edu.in</p>
          </div>
          <Separator />
          <div className="flex gap-8">
            <Phone className="w-7 h-7" />
            <p>
              <strong>ICAFM-2024 Convener</strong>
              <br /> <span>Dr.G.ANANDHA BABU</span>
              <br /> +91 9791137823
            </p>
          </div>
        </div>
        <iframe
          width="100%"
          height="350"
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.4253634897605!2d80.19508151491014!3d12.750865091000964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52512f04729e11%3A0xbc4ea0ae50ca1aaa!2sSSN+College+of+Engineering!5e0!3m2!1sen!2sin!4v1499677369694"
        ></iframe>
      </div>
    </section>
  );
}
