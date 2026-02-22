"use client";

import {
  FaHardHat,
  FaUserTie,
  FaFingerprint,
  FaAward,
  FaCogs,
  FaHourglassHalf,
  FaRupeeSign,
  FaShieldAlt,
  FaEye,
  FaHandshake,
  FaHeadset,
  FaSmile,
} from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";

const features = [
  { title: "No Subcontractors", icon: FaHardHat },
  { title: "Professional Project Management", icon: FaUserTie },
  { title: "Unique And Modern Designs", icon: FaFingerprint },
  { title: "Quality", icon: FaAward },
  { title: "Process", icon: FaCogs },
  { title: "Adherence To Timelines", icon: FaHourglassHalf },
  { title: "Competitive Pricing", icon: FaRupeeSign },
  { title: "High-Quality Design", icon: FaShieldAlt },
  { title: "Transparency", icon: FaEye },
  { title: "Brand / Trustworthy", icon: FaHandshake },
  { title: "Professional Customer Service", icon: FaHeadset },
  { title: "Hassle-Free Service", icon: FaSmile },
];

export default function Qualities() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Why Choose Pawansut Builders"
          paragraph=""
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon className="text-primary text-5xl mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1" />

                <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}