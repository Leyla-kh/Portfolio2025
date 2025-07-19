import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "../components/Button";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="movie React Native App" />
            </div>
            <div className="text-content">
              <h2>
                Search New Movies Made Simple with a Powerfull, User-Friendly
                App Called Movu
              </h2>
              <p>
                {" "}
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div ref={project2Ref}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>

              <div className="flex flex-row items-center justify-between">
                <h2 className="">Learning Language App (Doulingo Clone)</h2>
                <div className="flex flex-col items-center">
                  <a
                    href="https://language-app-delta.vercel.app/"
                    target="_blank"
                    className="group flex"
                  >
                    <div className="px-3 py-1 rounded-lg bg-white text-black group-hover:bg-black-50 transition-colors duration-300 mt-3">
                      <span className="group-hover:text-white transition-colors duration-300 text-xs">
                        Demo
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://github.com/Leyla-kh/language-app"
                    target="_blank"
                    className="group flex "
                  >
                    <div className="px-3 py-1 rounded-lg bg-white text-black group-hover:bg-black-50 transition-colors duration-300 mt-2">
                      <span className=" group-hover:text-white transition-colors duration-300 text-xs">
                        Github
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <div className="flex flex-row items-center justify-between">
                <h2>A Modern Game Landing Page</h2>
                <div className="flex flex-col items-center">
                  <a
                    href="https://game-landing-ebon.vercel.app/"
                    target="_blank"
                    className="group "
                  >
                    <div className="px-3 py-1 rounded-lg bg-white text-black group-hover:bg-black-50 transition-colors duration-300 mt-3">
                      <span className="group-hover:text-white transition-colors duration-300 text-xs text-center">
                        Demo
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://github.com/Leyla-kh/game-Landing"
                    target="_blank"
                    className="group flex "
                  >
                    <div className="px-3 py-1 rounded-lg bg-white text-black group-hover:bg-black-50 transition-colors duration-300 mt-2 ">
                      <span className=" group-hover:text-white transition-colors duration-300 text-xs justify-center">
                        Github
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
