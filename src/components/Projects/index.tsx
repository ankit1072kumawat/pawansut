import SectionTitle from "../Common/SectionTitle";
import SingleProject from "./SingleProject";
import projectData from "./projectData";

const Project = () => {
  return (
    <section
      id="project"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Projects"
          paragraph="Discover our latest home construction and commercial projects in Jaipur, where modern design meets durable craftsmanship."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-2">
          {projectData.map((project) => (
            <div key={project.id} className="w-full">
              <SingleProject project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
