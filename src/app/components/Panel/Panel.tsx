import PanelBody from "./Panel.Body";
import PanelHeader from "./Panel.Header";

const Panel = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col flex-auto h-screen border-r ${className || ""}`}
    >
      {children}
    </div>
  );
};

Panel.Header = PanelHeader;
Panel.Body = PanelBody;

export default Panel;
