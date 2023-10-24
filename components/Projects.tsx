import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import secondchance from "../public/img/secondchance.png";
import bitchange from "../public/img/bitchange.png";
import nfticket from "../public/img/nfticket.png";
import blocksneakers from "../public/img/blocksneakers.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
            img={secondchance.src}
            title="SeconChance"
            link="https://github.com/Riksa011/Start2Impact-Django-Redis-Project"
          />
        <ProjectCard
            img={bitchange.src}
            title="BitChange"
            link="https://github.com/Riksa011/Start2Impact-MongoDB-Project"
          />
        <ProjectCard
          img={nfticket.src}
          title="NFTicket"
          link="https://github.com/Riksa011/Start2Impact-Ethereum-Project"
        />
        <ProjectCard
          img={blocksneakers.src}
          title="BlockSneakers"
          link="https://github.com/Riksa011/Start2Impact-BlockChain-Final-Project"
        />
      </div>
    </div>
  );
};

export default Projects;
