import { PropsWithChildren } from "react";

const PanelHeader: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      {children}
    </div>
  );
};

export default PanelHeader;
