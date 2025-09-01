import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

const SingleProject = ({ project }: { project: Project }) => {
  const { title, image, paragraph, author, tags, publishDate } = project;
  return (
    <div className="group dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      {/* Project Image */}
      <div className="relative block aspect-37/22 w-full overflow-hidden rounded-t-xl">
        <span className="bg-primary absolute top-4 right-4 z-20 inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold text-white capitalize shadow-md">
          {tags[0]}
        </span>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="dark:from-dark/90 dark:to-dark rounded-b-xl border-t border-gray-100 bg-gradient-to-t from-gray-50 to-white p-6 sm:p-8 dark:border-white/10">
        {/* Title (optional) */}
        {/* <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
          {title}
        </h3> */}

        {/* <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {paragraph}
        </p> */}

        <div className="flex items-center justify-between">
          {/* Author */}
          <div>
            <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
              {author.name}
            </h4>
            <p className="text-body-color text-xs">{author.Location}</p>
          </div>

          {/* Date */}
          <div className="text-right">
            <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
              Date
            </h4>
            <p className="text-body-color text-xs">{publishDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
