import CollageImage from "@/assets/images/ssn-college-collage.jpg";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutDepartment() {
  return (
    <section className="max-w-7xl w-full mx-auto px-4">
      <h1 className="text-5xl font-bold my-8">About SSN</h1>
      <div className="flex flex-col md:grid grid-cols-2 gap-8 text-lg">
        <div className="relative w-full">
          <Link
            href="https://youtu.be/A-vNlIpHp3U?feature=shared"
            target="_blank"
          >
            <Button
              variant="icon"
              className="absolute top-2/4 left-2/4  translate-x-[-68%] translate-y-[-170%]  z-50"
            >
              <Play className="w-20 h-20 text-white border-8 rounded-full p-2" />
            </Button>
          </Link>
          <Image className="" src={CollageImage} />
          {/* 
          <i
              className="far fa-circle-play fa-5x"
              style="color: #69beff; position: absolute; top: 50%; left: 46%; transform: translate(-50%, -50%);"
            ></i> */}
        </div>
        <div className="space-y-4">
          <div>
            Sri Sivasubramaniya Nadar (SSN) College of Engineering, founded by
            Shiv Nadar, Founder, HCL Technologies, stands out as a premier
            center of higher learning with a mission of pursuing excellence in
            education and research. The institution, with its diverse and
            dynamic community of students, faculty and staff, offers a
            distinctive combination of some of graduate, undergraduate and
            research programs, and is spread over a sprawling 250 acres of
            sylvan surroundings.
          </div>
          <div>
            The institution provides a stimulating environment for the
            intellectual development and personal growth of students, and equips
            them with the skills, attitudes and practical experiences that are
            necessary to take up responsibilities in the society.
          </div>
          <div>
            The college has a lot in store for the students outside the
            classroom as well. Students have opportunities to participate in
            sports, recreational & co-curricular activities.
          </div>
          <div>
            The institute is home to aesthetically designed buildings with state
            of the-art computer and internet facilities, seminar halls,
            auditoriums and well stocked libraries, sports and games fields in
            addition to an indoor stadium with gymnasium.
          </div>
        </div>
      </div>
    </section>
  );
}
