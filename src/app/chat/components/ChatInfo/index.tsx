import Panel from "@/app/components/Panel/Panel";
import Title from "@/app/components/shared/Title";
import OptionsIcon from "@/assets/options.svg";
import Image from "next/image";
import TeamMembers from "./TeamMembers";
import Files from "@/app/components/Files";

const ChatInfo = ({ id }: { id: string }) => {
  return (
    <Panel>
      <Panel.Header>
        <Title>Directory</Title>
        <Image src={OptionsIcon} alt="directory options" className="m-1" />
      </Panel.Header>
      <Panel.Body>
        <TeamMembers />
        <Files />
      </Panel.Body>
    </Panel>
  );
};

export default ChatInfo;
