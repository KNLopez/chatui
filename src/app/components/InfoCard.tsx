import { PropsWithChildren } from "react";
import Avatar from "./shared/Avatar";

interface InfoCardProps extends PropsWithChildren {
  title: string;
  subtitle: string;
  rightInfo?: string | React.ReactNode;
  image: string | React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({
  image,
  title,
  subtitle,
  rightInfo,
  isActive,
  children,
  onClick,
}) => {
  return (
    <div
      className={` flex items-start justify-between
      p-4 
      ${isActive ? "bg-primary-100" : "bg-white"}
      rounded-lg
      cursor-pointer

      hover:bg-primary-100`}
      onClick={onClick}
    >
      {typeof image === "string" ? <Avatar src={image} alt={title} /> : image}
      <div
        className="
        flex-1
        flex flex-col
        justify-between
        items-start
        ml-4
      "
      >
        <h3
          className="
          text-md
          font-semibold
          text-gray-800
        "
        >
          {title}
        </h3>
        <p
          className="
          text-xs
          font-semibold
          text-gray-400
        "
        >
          {subtitle}
        </p>
        {children}
      </div>
      {typeof rightInfo === "string" ? (
        <div
          className="
        text-sm
        font-semibold
        text-gray-400
      "
        >
          {rightInfo}
        </div>
      ) : (
        rightInfo
      )}
    </div>
  );
};

export default InfoCard;
