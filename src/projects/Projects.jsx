import { useState, useEffect } from 'react';
import githubLogo from '../../public/github.svg';
import link from '../../public/link.svg';

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/info.json');
        const result = await response.json();
        setData(result.projects);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <p className="mt-10 text-3xl font-bold text-center text-slate-300">
        PROJECTS
      </p>
      <div className="flex flex-wrap justify-center px-4 mt-6 mb-20">
        {data.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 p-4 w-full sm:w-[300px] h-auto m-2 flex flex-col items-center shadow-2xl rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-400"
          >
            <div className="flex flex-col items-center space-y-4">
              <p className="text-2xl font-bold text-violet-400">
                {project.name}
              </p>
              <p className="text-sm text-center text-slate-300">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center space-x-2">
                {project.stack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-sm font-bold text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-2">
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
                </a>
                <a
                  href={project.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={link} alt="Link" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
