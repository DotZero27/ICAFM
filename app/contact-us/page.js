import { Separator } from "@/components/ui/separator";
import { MapPin, Mail, Phone } from "lucide-react";

import HomeBanner from "@/assets/homeBanner.jpeg";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="relative">
        <Image
          src={HomeBanner}
          className="w-full h-[28vh] aspect-video object-cover absolute -z-20"
        />
        <div className="absolute bg-primary opacity-70 w-full h-[28vh] -z-10" />
        <div className="flex items-center justify-center text-white text-8xl z-10 h-[28vh] font-barlow font-bold">
          CONTACT US
        </div>
      </div>

      <section className="max-w-7xl w-full mx-auto mt-16">
        <div className="grid grid-cols-[1fr_0.5fr] gap-10">
          <div className="space-y-10">
            <div>
              <div className="text-primary font-barlow font-bold text-4xl uppercase leading-normal">
                Dr.G.Anandha Babu
              </div>
              <div className="text-xl">Convener, ICAFM-2024</div>
            </div>

            <div>
              <div className="text-primary font-barlow font-bold text-4xl uppercase leading-normal">
                Address
              </div>
              <div className="text-xl">
                Sri Sivasubramaniya Nadar College of Engineering
                <br />
                Rajiv Gandhi Salai (OMR), Kalavakkam – 603 110,
                <br />
                Tamil Nadu, India
              </div>
            </div>

            <div>
              <div className="text-primary font-barlow font-bold text-4xl uppercase leading-normal">
                Email:
              </div>
              <div className="text-xl">icafm2024@gmail.com</div>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <div className="text-primary font-barlow font-bold text-4xl uppercase leading-normal">
                Phone No.
              </div>
              <div className="text-xl">044 2746 9700</div>
            </div>
            <div>
              <div className="text-primary font-barlow font-bold text-4xl uppercase leading-normal">
                Mobile No.
              </div>
              <div className="text-xl">+91 9791137823</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
