import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      // <svg width="40" height="40" viewBox="0 0 24 24" className="w-full h-full object-cover">
      //   <path d="M3 7h18M3 12h18M3 17h18" />
      // </svg>
      <img
        src="/images/features/innovative-designs.jpg"
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
        src="/images/features/expert-execution.jpg"
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
        src="/images/features/quality-materials.jpg"
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
        src="/images/features/durable-structural-work.jpg"
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
        src="/images/features/finishing-interiors.jpg"
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
        src="/images/features/safety-quality-control.jpg"
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
