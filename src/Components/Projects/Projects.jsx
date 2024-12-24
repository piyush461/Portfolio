import "../Projects/Projects.css";
import SectionHead from "../Header/SectionHead";
import ProjectCard from "../Projects/ProjectCard";
import project from "../../data/project.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination'
import { Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <>
      <div className="w-full h-auto pt-28 pb-10" id="project">
        <SectionHead head="Projects" />
        <div className="flex justify-around flex-wrap max-md:hidden">
          {project.map((data, index) => (
            <ProjectCard
              key={index}
              Url={data.Url}
              Name={data.name}
              Desc={data.desc}
              srcURL={data.srcURL}
              gitURL={data.gitURL}
            />
          ))}
        </div>
        <div className="md:hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          modules={[Pagination]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          {project.map((data, index) => (
            <SwiperSlide key={index}>
              <ProjectCard Url={data.Url} Name={data.name} Desc={data.desc} />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </>
  );
};

export default Projects;
