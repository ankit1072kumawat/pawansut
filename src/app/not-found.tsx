import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you were looking for could not be found. Head back to the Pawansut Builders home page.",
  robots: {
    index: false,
    follow: true,
  },
};

const NotFound = () => {
  return (
    <section className="relative z-10 pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[530px] text-center">
              <span className="text-primary mb-4 block text-7xl font-extrabold sm:text-8xl">
                404
              </span>
              <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl dark:text-white">
                Sorry, the page can’t be found
              </h1>
              <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg">
                The page you were looking for appears to have been moved, deleted
                or does not exist.
              </p>
              <Link
                href="/"
                className="bg-primary shadow-signUp hover:bg-primary/90 rounded-md px-8 py-3 text-base font-bold text-white duration-300 md:px-9 lg:px-8 xl:px-9"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
