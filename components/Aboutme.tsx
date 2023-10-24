import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
        I am a Junior Blockchain Developer with experience in building Django and NextJS 
        web applications that incorporate the benefits of blockchain technology, 
        including the use of Solidity smart contracts.
        </p>
        <p>
        I am actively seeking new job opportunities that will make me grow both personally 
        and professionally and I am excited to take on exciting new challenges.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
