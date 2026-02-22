"use client"
// import NewsLatterBox from "./NewsLatterBox";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xnjqyjwo");

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="shadow-three dark:bg-gray-dark mb-12 rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-white">
                Need Help? Get in Touch!
              </h2>
              {/* <p className="text-body-color mb-12 text-base font-medium">
                Our team will get back to you ASAP via email.
              </p> */}
              <form onSubmit={handleSubmit}>
                {state.succeeded ?
                  <div className="-mx-4 flex flex-wrap py-10">
                    <p><b>Thank you for contacting Pawansut Builders!</b></p>
                    <p>Our team will reach out to you shortly...</p></div>
                  : <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Enter your name"
                          className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                        <ValidationError
                          prefix="Name"
                          field="name"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="Enter your email"
                          className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          required
                          placeholder="Enter your Message"
                          className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        ></textarea>
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-10 px-4 py-10">

                      {/* Primary Submit Button */}
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="px-10 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                      >
                        Submit
                      </button>

                      {/* WhatsApp Button */}
                      <a
                        href="https://wa.me/919414322763?text=Hi%20Pawansut%20Builders,%20I%20want%20to%20discuss%20my%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 rounded-2xl bg-green-600 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-green-700 transition-all duration-300"
                      >
                        WhatsApp Us
                      </a>

                    </div>
                  </div>}
              </form>
              <div className="space-y-4 text-base text-gray-700 dark:text-white">
                <p>
                  <strong>📍 Office Address:</strong> 36B Laxmi Nagar,
                  Niwaru raod, Jhotwara, Jaipur, Rajasthan 302012
                </p>

                <p>
                  <strong>📞 Phone:</strong>
                  <a
                    href="tel:+919414322763"
                    className="text-blue-600 hover:underline"
                  >
                    +91 9414322763
                  </a>
                </p>

                <p>
                  <strong>📧 Email:</strong>
                  <a
                    href="mailto:info@pawansutbuilders.com"
                    className="text-blue-600 hover:underline"
                  >
                    {" "}
                    info@pawansutbuilders.com
                  </a>
                </p>

                <p>
                  <strong>🕒 Working Hours:</strong> Mon – Sat: 9:00 AM –
                  8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
      </div>
    </section>
  );
};

export default Contact;
