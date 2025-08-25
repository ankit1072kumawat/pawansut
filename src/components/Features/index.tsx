import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      {/* <section id="features" className="py-16 md:py-20 lg:py-28"> */}
      <section
        id="features"
        className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 lg:py-28 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container">
          <SectionTitle
            title="Building Excellence"
            paragraph="Whether it’s residential, commercial, or infrastructure projects, we deliver unmatched quality and trust that stand the test of time."
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
