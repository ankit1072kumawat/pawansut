// const SectionTitle = ({
//   title,
//   paragraph,
//   width = "570px",
//   center,
//   mb = "100px",
// }: {
//   title: string;
//   paragraph: string;
//   width?: string;
//   center?: boolean;
//   mb?: string;
// }) => {
//   return (
//     <>
//       <div
//         className={`w-full ${center ? "mx-auto text-center" : ""}`}
//         style={{ maxWidth: width, marginBottom: mb }}
//       >
//         <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px]">
//           {title}
//         </h2>
//         <p className="text-base leading-relaxed! text-body-color md:text-lg">
//           {paragraph}
//         </p>
//       </div>
//     </>
//   );
// };
"use client";


import { motion } from "framer-motion";
import { ReactNode } from "react";


interface SectionTitleProps {
  title: string;
  paragraph: string | ReactNode;
  center?: boolean;
  paragraphClass?: string;
}

const SectionTitle = ({ title, paragraph, center, paragraphClass }: SectionTitleProps) => {
  return (
    <motion.div
      className={`mb-12 ${
        center
          ? paragraphClass
            ? "mx-auto text-center"
            : "mx-auto max-w-2xl text-center"
          : "text-left"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ amount: 0.3, once: false }}
    >
      {/* Title */}
      <motion.h2
        className="font-montserrat relative inline-block text-3xl leading-tight font-extrabold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ amount: 0.3, once: false }}
      >
        {title}
        <motion.span
          className="absolute -bottom-2 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        />
      </motion.h2>

      {/* Paragraph */}
      {paragraph && (
        <motion.p
          className="font-poppins mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          {paragraph}
        </motion.p>
      )}
    </motion.div>
  );
};
export default SectionTitle;
