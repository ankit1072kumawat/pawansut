import { Feature } from "@/types/feature";

// const SingleFeature = ({ feature }: { feature: Feature }) => {
//   const { icon, title, paragraph } = feature;
//   return (
//     <div className="w-full">
//       <div className="wow fadeInUp" data-wow-delay=".15s">
//         <div className="text-primary mb-5 flex h-[130px] w-[130px] items-center justify-center rounded-md ">
//           {icon}
//         </div>
//         <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
//           {title}
//         </h3>
//         <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
//           {paragraph}
//         </p>
//       </div>
//     </div>
//   );
// };
const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full">
      <div className="wow fadeInUp group" data-wow-delay=".15s">
        {/* Icon container */}
        {/* <div className="mb-5 flex h-[110px] w-[110px] items-center justify-center rounded-full bg-gray-100 shadow-md transition-transform duration-300 group-hover:scale-105">
          {icon}
        </div> */}
        <div className="mb-6 flex h-[140px] w-[140px] items-center justify-center overflow-hidden rounded-2xl shadow-xl md:h-[180px] md:w-[180px] lg:h-[200px] lg:w-[300px]">
          {icon}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>

        {/* Paragraph */}
        <p className="text-base leading-relaxed font-medium text-gray-600 dark:text-gray-300">
          {paragraph}
        </p>
      </div>
    </div>
  );
};


export default SingleFeature;
