import { ReactNode } from "react";


interface Props {
  title: string;
  subTitle: string;
  icon: ReactNode;
  description: string;
}

const ExperienceCard = ({ title, subTitle, icon, description }: Props) => {
  return (
    <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-full bg-black border-[1px] border-blue-600 flex items-center justify-center">
        <span className="text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-10 h-8 text-white-600"
          >
            {icon}
          </svg>
        </span>
      </span>
      <div>
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className="text-base tracking-wide text-gray-400 mb-2">{subTitle}</p>
        <p>{description}</p>
        <a
          href="/Attestato Completamento Master.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here's the Master's Completion Certificate.
        </a>
      </div>
    </div>
  );
};

export default ExperienceCard;
