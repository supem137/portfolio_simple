import { useEffect, useState } from 'react';
import githubLogo from '../../public/github.svg';
import linkedinLogo from '../../public/linkedin.svg';

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/info.json');
        const result = await response.json();
        setData(result.about);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-[815px] mx-auto mt-10 sm:mt-20 flex flex-col items-center space-y-8 mb-10 sm:mb-20 px-4 sm:px-0">
      <p className="text-4xl font-bold text-center sm:text-6xl text-violet-400">
        <span className="block text-slate-300">Hi, I am</span>
        <span>{data.name}</span>
      </p>
      <p className="text-xl font-bold text-center sm:text-3xl text-slate-300">
        {data.role}
      </p>
      <p className="text-center text-slate-300">{data.description}</p>
      <div className="flex justify-center space-x-2">
        <button className="px-4 py-3 transition border-2 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white">
          Resume
        </button>

        <a
          href={data.social && data.social.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={githubLogo}
            alt="GitHub"
            className="w-10 h-10 sm:h-12 sm:w-12"
          />
        </a>
        <a
          href={data.social && data.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedinLogo}
            alt="LinkedIn"
            className="w-10 h-10 sm:h-12 sm:w-12"
          />
        </a>
      </div>
    </div>
  );
};

export default About;
