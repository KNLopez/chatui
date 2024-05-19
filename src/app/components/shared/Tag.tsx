import type { Tag } from "@/types/converstaion";

type TagProps = {
  tag: Tag;
  text: string;
};

const TagConfig = {
  bug: {
    bgColor: "bg-danger-200",
    textColor: "text-danger-600",
  },
  question: {
    bgColor: "bg-primary-200",
    textColor: "text-primary-600",
  },
  feature: {
    bgColor: "bg-success-200",
    textColor: "text-success-600",
  },
  feedback: {
    bgColor: "bg-warning-200",
    textColor: "text-warning-600",
  },
  support: {
    bgColor: "bg-info-200",
    textColor: "text-info-600",
  },
  other: {
    bgColor: "bg-secondary-200",
    textColor: "text-secondary-600",
  },
  chip: {
    bgColor: "bg-secondary-200",
    textColor: "text-black-600",
  },
};

const Tag = ({ tag, text }: TagProps) => {
  return (
    <span
      className={`
        flex items-center justify-center
        px-2 py-1 rounded-full text-xs font-semibold
        ${TagConfig[tag].bgColor} ${TagConfig[tag].textColor}
        capitalize
    `}
    >
      {text}
    </span>
  );
};

export default Tag;
