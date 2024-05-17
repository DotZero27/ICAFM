import HomeBanner from "@/assets/homeBanner.jpeg";
import Image from "next/image";

const INTERNATIONAL_MEMBERS = [
  "Prof. Hiroaki Takeda, Saitama University, Japan",
  "Prof. Kenji Uchino, The Pennsylvania State University, USA",
  "Prof. Kozo Fujiwara, Tohoku University, Japan",
  "Prof. Masashi Kato, Nagoya Institute of Technology, Japan",
  "Prof. Noritaka Usami, Nagoya University, Japan",
  "Prof. Roberto Fornari University of Parma, Italy",
  "Prof. Yuji Noguchi, Kumamoto University, Japan",
  "Dr. Kosuke Hara, University of Yamanashi, Japan",
];

// const NATIONAL_MEMBERS = [
//   "Dr. Arockiarajan A, Indian Institute of Technology Madras, Chennai",
//   "Dr. Arun Kumar R, NIT Andhra Pradesh, Tadepalligudem",
//   "Dr. Balakumar S, Madras University, Chennai",
//   "Dr. Binay Kumar, University of Delhi, New Delhi",
//   "Dr. Ezhil Vizhi R, Vellore Institute of Technology, Vellore",
//   "Dr. Ganesamoorthy S, IGCAR, Kalpakkam",
//   "Dr. Gurvinderjit Singh, Raja Ramanna Centre for Advanced Technology, Indore",
//   "Dr. Indranil Bhaumik, Raja Ramanna Centre for Advanced Technology, Indore",
//   "Dr. Justin Raj C, Vellore Institute of Technology, Chennai",
//   "Dr. Kulkarni A R, Indian Institute of Technology-Bombay, Mumbai",
//   "Dr. Mahanth Prasad, CSIR-Central Electronics Engineering Research Institute, Pilani",
//   "Dr. Moorthy Babu S, Anna University, Chennai",
//   "Dr. Pavan Nukala, Indian Institute of Science, Bengaluru",
//   "Dr. Praveen kumar B, Armament Research & Development Establishment, Pune",
//   "Dr. Rajeev Ranjan, Indian Institute of Science, Bengaluru",
//   "Dr. Ramesh Babu R, Bharathidasan University, Trichy",
//   "Dr. Ramesh R, Periyar University, Salem",
//   "Dr. Sarma D.D, Indian Institute of Science, Bengaluru",
//   "Dr. Sethuraman K, Central University of Tamilnadu. Thiruvarur",
//   "Dr. Shashwati Sen, Bhabha Atomic Research Centre, Mumbai",
//   "Dr. Shrabanee Sen, CSIR- Central Glass and Ceramics Research Institute, Kolkata",
//   "Dr. Srinivasan P, National Institute of Technology, Silchar",
//   "Dr. Srinivasan K, Bharathiar University, Coimbatore",
//   "Dr. Subramanian V, Indian Institute of Technology Madras, Chennai",
//   "Dr. Sudeep Verma ,DRDO-SSPL, Delhi",
//   "Dr Suja Elizabeth, Indian Institute of Science, Bengaluru ",
//   "Dr. Sundarakannan B, Manonmaniam Sundaranar University, Tirunelveli",
//   "Dr. Thakur O P,DRDO-SSPL, Delhi",
//   "Dr. Vijayan N, CSIR- National Physical Laboratory, New Delhi",
//   "Dr. Yusuf S. M., Bhabha Atomic Research Centre, Mumbai",
// ];

export default function CommitteeAdvisory() {
  return (
    <>
      <div className="relative">
        <Image
          src={HomeBanner}
          className="w-full h-[28vh] aspect-video object-cover absolute -z-20"
          alt="homeBanner"
        />
        <div className="absolute bg-primary opacity-70 w-full h-[28vh] -z-10" />
        <div className="flex flex-col items-center justify-center text-white text-7xl sm:text-8xl z-10 h-[28vh] font-barlow uppercase font-bold tracking-wide">
          <div className="font-normal text-xl sm:text-4xl">International Advisory</div>
          Committee
          
        </div>
      </div>

      <section className="max-w-7xl mx-auto w-full mt-16 px-4">
        <div>
          {/* <div className="text-primary font-barlow uppercase text-5xl font-bold mb-4">
            International Advisory Committee 
          </div> */}
          <ul className="border-l-4 border-primary ml-4 sm:ml-12 pl-10">
            {INTERNATIONAL_MEMBERS.map((member, index) => (
              <li
                key={index}
                className="ml-4 list-item list-disc text-lg leading-[2.5]"
              >
                {member}
              </li>
            ))}
          </ul>
        </div>

      </section>
    </>
  );
}
