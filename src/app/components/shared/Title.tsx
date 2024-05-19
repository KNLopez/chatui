import { PropsWithChildren } from "react";

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2
      className="
        text-xl
        font-semibold
        text-gray-800
      "
    >
      {children}
    </h2>
  );
};

export default Title;
