import Panel from "@/app/components/Panel/Panel";
import { getMessages } from "@/mocks/messages";
import Body from "./Body";
import Header from "./Header";

const ChatConversation = async ({ id }: { id: string }) => {
  const { messages, sender } = await getMessages(id);

  return (
    <Panel className="w-1/2">
      <Panel.Header>
        <Header sender={sender} />
      </Panel.Header>
      <Panel.Body>
        <Body messages={messages} sender={sender} />
       
      </Panel.Body>
    </Panel>
  );
};

export default ChatConversation;
