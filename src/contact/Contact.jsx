import { useEffect, useState } from 'react';

const Contact = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/info.json');
        const result = await response.json();
        setData(result.contact);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-full mb-20">
      <p className="mb-6 text-3xl font-bold text-center text-slate-300">
        CONTACT
      </p>
      <div className="flex justify-center">
        <a href={data.email}>
          <button className="py-2 transition border-2 px-7 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white">
            Email
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
