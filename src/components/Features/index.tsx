import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      {/* <section id="features" className="py-16 md:py-20 lg:py-28"> */}
        <section id="features" className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">

        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="From blueprint to handover, our core features cover every phase of construction—designed for precision, built for lasting impact."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
