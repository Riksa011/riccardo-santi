import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput title="Python" link="https://www.python.org/" />
        <SkillsInput title="Django" link="https://www.djangoproject.com/" />
        <SkillsInput title="MongoDB" link="https://www.mongodb.com/" />
        <SkillsInput title="RedisDB" link="https://redis.io/" />
        <SkillsInput
          title="Html & Css"
          link="https://sos-wp.it/tutorial/guida-html-css/"
        />
        <SkillsInput
          title="Javascript"
          link="https://aws.amazon.com/it/what-is/javascript/"
        />
        <SkillsInput title="NextJS" link="https://nextjs.org/" />
        <SkillsInput title="Solidity" link="https://soliditylang.org/" />
        <SkillsInput title="Remix IDE" link="https://remix-project.org/" />
        <SkillsInput
          title="Web3.py"
          link="https://web3py.readthedocs.io/en/stable/"
        />
        <SkillsInput
          title="Ethers.js"
          link="https://docs.alchemy.com/docs/what-is-ethers-js"
        />
        <SkillsInput title="Github" link="https://github.com/" />
      </div>
    </div>
  );
};

export default Skills;
