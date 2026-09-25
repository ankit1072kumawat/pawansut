import SectionTitle from "../Common/SectionTitle";
import type { Faq } from "@/lib/jsonLd";
import { business } from "@/lib/site";

export const homeFaqs: Faq[] = [
  {
    question: "Which areas of Jaipur does Pawansut Builders work in?",
    answer:
      "We work across all of Jaipur and roughly 30 km around our Jhotwara office — including Niwaru Road, Kalwar Road, Vidyadhar Nagar, Vaishali Nagar, Sikar Road, Mansarovar, Malviya Nagar, Tonk Road, Jagatpura, and nearby towns such as Amer, Kukas, and Chomu.",
  },
  {
    question: "How much does house construction cost per square foot in Jaipur?",
    answer:
      "Turnkey residential construction in Jaipur generally ranges from about ₹1,650 to ₹2,400 per sq. ft. depending on the structural design, finishing level, and site conditions. We give a detailed, itemised quotation after a free site visit so there are no hidden costs.",
  },
  {
    question: "Do you handle the building plan approval and drawings?",
    answer:
      "Yes. We prepare architectural and structural drawings and help with JDA / municipal plan sanction, along with soil testing and the structural design, before construction starts.",
  },
  {
    question: "How long does it take to build a house in Jaipur?",
    answer:
      "A standard independent house of two to three floors typically takes 8 to 12 months from foundation to handover, depending on size, weather, and material choices. The timeline and stage-wise schedule are fixed in the contract.",
  },
  {
    question: "Do you use your own team or subcontractors?",
    answer:
      "Core work is done by our own engineers, supervisors, and trained crews. We do not hand the project to outside subcontractors, which keeps quality and the schedule under our control.",
  },
  {
    question: "Can I get a site visit and estimate before committing?",
    answer:
      `Yes. Call or WhatsApp us on ${business.phone} and we will arrange a free site visit anywhere in Jaipur, take measurements, understand your requirement, and share a written estimate.`,
  },
];

export default function Faq({ faqs = homeFaqs }: { faqs?: Faq[] }) {
  return (
    <section
      id="faq"
      className="bg-gray-50 py-16 md:py-20 lg:py-24 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Frequently Asked Questions"
          paragraph="Common questions from Jaipur homeowners planning a build."
          center
        />

        <div className="mx-auto max-w-3xl divide-y divide-gray-200 dark:divide-gray-700">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-lg font-semibold text-black [&::-webkit-details-marker]:hidden dark:text-white">
                {faq.question}
                <span className="text-primary ml-4 shrink-0 text-2xl leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-body-color mt-3 text-base leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
