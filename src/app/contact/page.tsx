import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Whether you're planning a new project, exploring investment opportunities, or simply have a question — we're here to help. Reach out to our team, and we’ll respond promptly.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us  "
        description="Whether you're planning a new project, exploring investment opportunities, or simply have a question — we're here to help. Reach out to our team, and we’ll respond promptly."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
