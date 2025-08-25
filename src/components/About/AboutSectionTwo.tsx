import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section id="services" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <SectionTitle
            title="Our Services"
            paragraph="From complete construction projects to in-house material supply, 
            we provide end-to-end solutions that combine quality, affordability, 
            and modern design standards."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left Side Image */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/services-image.svg"
                alt="services image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/services-image-dark.svg"
                alt="services image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>

          {/* Right Side Services */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl xl:text-2xl dark:text-white">
                  Home, Commercial & Farmhouse Construction
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg">
                  From residential homes to commercial complexes and farmhouses,
                  we deliver end-to-end construction solutions tailored to your
                  needs.
                </p>
              </div>

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl xl:text-2xl dark:text-white">
                  In-House Building Material Supply
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg">
                  Our in-house material supply chain ensures top-quality
                  construction materials at competitive rates, delivered on
                  time.
                </p>
              </div>

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl xl:text-2xl dark:text-white">
                  Custom Steel & Railing Solutions
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg">
                  We design and manufacture all types of steel railings and
                  custom railing solutions to match safety with modern
                  aesthetics.
                </p>
              </div>

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl xl:text-2xl dark:text-white">
                  In-House Glass Solutions
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg">
                  From windows to custom glass fittings, our in-house glass
                  solutions add elegance and durability to your spaces.
                </p>
              </div>

              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl xl:text-2xl dark:text-white">
                  Construction Material Suppliers
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg">
                  We supply a wide range of construction materials, ensuring
                  consistent quality and cost-effective solutions for every
                  project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
