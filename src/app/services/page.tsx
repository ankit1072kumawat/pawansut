import Breadcrumb from "@/components/Common/Breadcrumb";
import Services from "@/components/Services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Services in Jaipur",
  description:
    "See how Pawansut Builders can support your Jaipur project, whether you need a new home, commercial space, farmhouse, interiors, elevation work, or materials.",
  alternates: {
    canonical: "/services",
  },
};

const ServicePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Construction Services in Jaipur"
        description="Home construction, commercial construction, farmhouse construction, interior design, front elevation work, and building material supply from one Jaipur team."
      />
      <Services />
    </>
  );
};

export default ServicePage;
