
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-gray-900 text-white"
      >
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/images/video/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 pt-[140px] pb-[120px] text-center md:pt-[180px] md:pb-[160px]">
          <h1 className="font-heading mb-6 text-4xl leading-tight font-extrabold sm:text-5xl md:text-6xl">
            Pawansut Construction
          </h1>
          <p className="mb-4 font-sans text-lg font-semibold text-gray-200 sm:text-xl md:text-2xl">
            Trusted Construction & Real Estate Solutions
          </p>

          <p className="mx-auto mb-10 max-w-2xl text-base text-gray-300 sm:text-lg md:text-xl">
            From blueprint to key handover, we deliver high-quality residential,
            commercial, and infrastructure projects with unmatched reliability
            and modern design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-xl bg-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-700"
            >
              Get Free Consultation
            </a>
            <a
              href="#projects"
              className="rounded-xl border border-white px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-white hover:text-gray-900"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
