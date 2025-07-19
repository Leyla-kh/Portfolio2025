import TitleHeader from "../components/TitleHeader";
import { skillsItems } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className="flex-center section-padding flex-col mt-10">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Prefered Tech Stack"
          sub="🤝 The Skills I Bring to the Table"
        />
      </div>

      <div className="flex flex-row flex-wrap flex-center gap-8 p-10 mt-10 ">
        {skillsItems.map((item) => (
          <div
            key={item.name}
            style={{ "--hover-bg": item.color }}
            className="flex flex-center gap-3 p-2 rounded-2xl border-2 border-zinc-600 group hover:bg-[var(--hover-bg)] transition-colors "
          >
            <div className="p-2 bg-zinc-700 group-hover:bg-zinc-900/50 rounded-2xl">
              <img src={item.icon} className="w-5 h-5" />
            </div>
            <div className="">
              <p>{item.title}</p>
              <p className="text-xs">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
