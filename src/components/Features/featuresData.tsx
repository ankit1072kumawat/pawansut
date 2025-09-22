import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      // <svg width="40" height="40" viewBox="0 0 24 24" className="w-full h-full object-cover">
      //   <path d="M3 7h18M3 12h18M3 17h18" />
      // </svg>
      <img
        src="https://www.r2contracts.com/img/headers/design.png"
        alt="Planning icon"
        // width={40}
        // height={40}
        className="h-full w-full object-cover"
      />
    ),
    title: "Innovative Designs",
    paragraph:
      "",
  },
  {
    id: 2,
    icon: (
      <img
        src="https://cdn.prod.website-files.com/640bd3c70828ca85b5021dd0/640bd3c70828cae197021ee9_61eeb4cd65031c2053837f26_610c70c4f92b924ea5cf0881_1039121731-huge-4mb-p-1080.jpg"
        alt="Management icon"
        className="h-full w-full object-cover"
      />
    ),
    title: "Expert Execution",
    paragraph:
      "",
  },
  {
    id: 3,
    icon: (
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/1*k64Y5O9JnTHs9opKuGrCuQ.jpeg"
        alt="Material icon"
        className="h-full w-full object-cover"
      />
    ),
    title: "Quality Materials",
    paragraph:
      "",
  },
  {
    id: 4,
    icon: (
      <img
        src="https://content.jdmagicbox.com/v2/comp/dehradun/y7/9999px135.x135.240712160651.q1y7/catalogue/ar-interiors-and-exterior-designing-dehradun-construction-contractors-nks83ouo1r.jpg"
        alt="Material icon"
        className="h-full w-full object-cover"
      />
    ),
    title: "Durable Structural Work",
    paragraph:
      "",
  },
  {
    id: 5,
    icon: (
      <img
        src="https://img.freepik.com/free-photo/building-construction-workers-site_23-2149124309.jpg"
        alt="Material icon"
        className="h-full w-full object-cover"
      />
    ),
    title: "Finishing & Interiors",
    paragraph:
      "",
  },
  {
    id: 6,
    icon: (
      <img
        src="https://planradar-website.s3.amazonaws.com/production/uploads/2023/08/workers-on-site.jpg"
        alt="Material icon"
        className="h-full w-full object-cover"
      />
    ),
    title: "Safety & Quality Control",
    paragraph:
      "",
  },
];

export default featuresData;
