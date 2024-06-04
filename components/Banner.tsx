import Image from "next/image";
import ProfileImg from "../public/img/foto.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={ProfileImg}
          alt="Profile Image"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl font-bold text-white">Riccardo Santi</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Blockchain Developer
        </h3>

        {/* Resume ENG and ITA */}
        {/* <div className="flex gap-2">
          <a
            href="/CV Riccardo Santi A ENG.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
              Resume ENG
            </button>
          </a>

          <a
            href="/CV Riccardo Santi A ITA.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
              Resume ITA
            </button>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
