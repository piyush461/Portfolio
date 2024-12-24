import SkillCard from "../Skills/SkillCard";
import skill from "../../data/skill.json";
import "../Skills/Skills.css";
import SectionHead from "../Header/SectionHead";


const Skills = () => {
  return (
    <div
      id="skills"
      className="h-auto w-full bg-slate-700 flex justify-center items-start">
      <div className="h-[70%] w-[80%] mt-20">
        <SectionHead head="Skills" />
        <p className="skillCap leading-[20px] text-lg font-bold text-cyan-400 bg-cyan-900">
          Languages
        </p>
        <div className="card flex flex-wrap gap-10 max-md:gap-2 justify-start items-center">
          {skill.languages.map((language, index) => (
            <SkillCard
              key={index}
              imgUrl={language.imgUrl}
              caption={language.caption}
              color={language.color}
            />
          ))}
        </div>

        <p className="skillCap leading-[20px] text-lg font-bold text-cyan-400 bg-cyan-900">
          Frameworks
        </p>
        <div className="card flex flex-wrap max-md:gap-2 gap-10 justify-start items-center">
          {skill.frameworks.map((framework, index) => (
            <SkillCard
              key={index}
              imgUrl={framework.imgUrl}
              caption={framework.caption}
              color={framework.color}
            />
          ))}
        </div>

        <p className="skillCap leading-[20px] text-lg font-bold text-cyan-400 bg-cyan-900">
          Tools
        </p>
        <div className="card flex flex-wrap max-md:gap-2 gap-10 justify-start items-center">
          {skill.tools.map((tool, index) => (
            <SkillCard
              key={index}
              imgUrl={tool.imgUrl}
              caption={tool.caption}
              color={tool.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
