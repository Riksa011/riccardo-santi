import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <a href="mailto:riccardobusiness04@gmail.com">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            Contact Me
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/Riksa011" />
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/riccardo-santi/"
        />
      </div>
    </div>
  );
};

export default Contact;
