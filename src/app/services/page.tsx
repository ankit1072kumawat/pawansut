import Breadcrumb from "@/components/Common/Breadcrumb";
import Services from "@/components/Services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Our Construction & Real Estate Services in Jaipur",
  // other metadata
};

const ServicePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description=""
      />
      <Services />
    </>
  );
};

export default ServicePage;
