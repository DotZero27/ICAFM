import Image from "next/image";

import ShivNadar from "@/assets/images/Shiv-Nadar.jpg";
import KalaVijayaKumar from "@/assets/images/Kala-VijayaKumar.jpg";
import { Separator } from "@/components/ui/separator";

const chiefPatrons = [
  {
    image: ShivNadar,
    name: "Shiv Nadar",
    position: "Founder, SSN Institutions & HCL Technologies",
  },
  {
    image: KalaVijayaKumar,
    name: "Dr.Kala Vijayakumar",
    position: "President, SSN Institutions",
  },
];

export default function Page() {
  return (
    <div className="max-w-4xl px-4 lg:mx-auto mb-12">
      <h2 className="font-bold text-4xl my-8">Chief Patrons</h2>
      <div className="grid grid-cols-4 gap-4">
        {chiefPatrons.map(({ image, name, position }, index) => (
          <div
            key={index}
            className="border pb-4 gap-2 text-center flex flex-col rounded-lg items-center shadow-lg"
          >
            <Image src={image} className="w-full" />
            {/* Name */}
            <div className="font-bold pt-4">{name}</div>
            {/* Position*/}
            <div className="text-sm font-light">{position}</div>
          </div>
        ))}
      </div>
      <Separator className="my-8" />
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-2xl font-bold mb-2">CO-PATRONS</h3>
            <div className="space-y-6">
              <div>
                <div className="font-medium">Prof. V. E. Annamalai</div>
                <span className="text-sm">
                  Principal, SSN College of Engineering
                </span>
              </div>
              <div>
                <div className="font-medium">Prof. S. Radha</div>
                <span className="text-sm">
                  Vice Principal, SSN College of Engineering
                </span>
              </div>
              <div>
                <div className="font-medium">Prof. P. Ramasamy</div>
                <span className="text-sm">
                  {" "}
                  Dean (Research) SSN College of Engineering
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">CO-ORDINATOR</h3>
            <div>
              <div>
                <div className="font-medium">Dr. S.M.M. Kennedy Head</div>
                <span className="text-sm">Department of Physics,</span>
                <br />
                <span className="text-sm">SSN College of Engineering</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">CONVENER</h3>
          <div>
            <div className="font-medium">Dr. Anandha Babu</div>
            <span className="text-sm">
              Sri Sivasubramaniya Nadar College of Engineering,
              <br />
              Rajiv Gandhi Salai (OMR),
              <br />
              Kalavakkam 603110, TN, INDIA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
