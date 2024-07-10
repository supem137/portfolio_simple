import { useEffect, useState } from 'react';

const Skills = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/info.json');
        const result = await response.json();
        setData(result.skills);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-full mb-20">
      <p className="mb-6 text-3xl font-bold text-center text-slate-300">
        SKILLS
      </p>
      <div className="flex flex-wrap justify-center max-w-[800px] w-[95%] space-x-2 space-y-2">
        {data.map((skill, index) => (
          <div
            key={index}
            className="px-4 py-2 m-2 text-center border-2 border-violet-400 text-slate-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
