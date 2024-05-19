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
    <div className={`flex-auto h-full border-r ${className || ""}`}>
      {children}
    </div>
  );
};

Panel.Header = PanelHeader;
Panel.Body = PanelBody;

export default Panel;
