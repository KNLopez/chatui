import Image from "next/image";

type AvatarProps = {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
};

const sizeConfig = {
  sm: "h-10",
  md: "h-12",
  lg: "h-16",
};

const Avatar = ({ src, alt, size = "md" }: AvatarProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={`rounded-md h-12 bg-primary-200 ${sizeConfig[size]}`}
      height={48}
      width={48}
    />
  );
};

export default Avatar;
