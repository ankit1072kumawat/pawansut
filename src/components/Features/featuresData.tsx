import Image from "next/image";
import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
        src="/images/features/innovative-designs.jpg"
        alt="Innovative home design by Pawansut Builders"
        width={300}
        height={200}
        className="h-full w-full object-cover"
      />
    ),
    title: "Innovative Designs",
    paragraph:
      "Modern, space-efficient layouts and elevations planned around how you actually live.",
  },
  {
    id: 2,
    icon: (
      <Image
        src="/images/features/expert-execution.jpg"
        alt="Pawansut Builders site team executing construction work"
        width={300}
        height={200}
        className="h-full w-full object-cover"
      />
    ),
    title: "Expert Execution",
    paragraph:
      "An in-house team of engineers and supervisors on site, with no work handed to outside subcontractors.",
  },
  {
    id: 3,
    icon: (
      <Image
        src="/images/features/quality-materials.jpg"
        alt="Quality construction materials used by Pawansut Builders"
        width={300}
        height={200}
        className="h-full w-full object-cover"
      />
    ),
    title: "Quality Materials",
    paragraph:
      "Branded cement, TMT steel, and fittings from trusted names, billed to you transparently.",
  },
  {
    id: 4,
    icon: (
      <Image
        src="/images/features/durable-structural-work.jpg"
        alt="Durable RCC structural work by Pawansut Builders"
        width={300}
        height={200}
        className="h-full w-full object-cover"
      />
    ),
    title: "Durable Structural Work",
    paragraph:
      "Engineered RCC framework and foundations built to code for long-term strength and safety.",
  },
  {
    id: 5,
    icon: (
      <Image
        src="/images/features/finishing-interiors.jpg"
        alt="Interior finishing work by Pawansut Builders"
        width={300}
        height={200}
        className="h-full w-full object-cover"
      />
    ),
    title: "Finishing & Interiors",
    paragraph:
      "Painting, flooring, modular kitchens, and false ceilings finished to a clean, handover-ready standard.",
  },
  {
    id: 6,
    icon: (
      <Image
        src="/images/features/safety-quality-control.jpg"
        alt="Site safety and quality control by Pawansut Builders"
        width={300}
        height={200}
        className="h-full w-full object-cover"
      />
    ),
    title: "Safety & Quality Control",
    paragraph:
      "Regular site inspections, material checks, and safety practices at every stage of the build.",
  },
];

export default featuresData;
