import Title from "./Title";
import { MdSchool } from "react-icons/md";
import { SiGooglescholar } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Education" icon={<MdSchool />} />
      <div className="grid grid-cols-1 gap-10">
        <ExperienceCard
          title="Master in Blockchain Development"
          subTitle="Start2Impact University Jan-Oct 2023"
          icon={<SiGooglescholar />}
          description="At Start2Impact, I learned coding theory certified by written exams and independently built 5 practical projects, all of which were reviewed by field experts. This hands-on experience enhanced my skills in Python, Django, MongoDB, JavaScript, NextJS, HTML & CSS, Ethereum Web3 and Solidity."
        />
      </div>
    </div>
  );
};

export default Experience;
