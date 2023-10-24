import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
        🙋🏻‍♂️ I'm a 19-year-old guy passionate about blockchain and cryptocurrencies, determined to turn my passion into a career on the web.
        </p>
        <p>
	🔗 I believe that blockchain is a disruptive technology that will change our world and it deserves to be studied and supported.
        </p>
        <p>
	👨🏻‍💻 I attended the Blockchain Development Master at Start2Impact University, working on 5 individual full-stack projects over 9 months. Through this hands-on experience, I've gained a strong foundation in web development using Django and Next.js, as well as skills in writing smart contracts in Solidity.
        </p>
        <p>
	💼 I’m actively seeking new job opportunities that will make me grow both personally and professionally, and I'm excited to put my web development skills into practice 🚀.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
