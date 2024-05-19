import Panel from "../../../components/Panel/Panel";
import { getConversations } from "@/mocks/conversations";
import Body from "./Body.tsx";
import Header from "./Header";

const ChatList = async ({ id }: { id: string }) => {
  const { conversations } = await getConversations();

  return (
    <Panel>
      <Panel.Header>
        <Header />
      </Panel.Header>
      <Panel.Body>
        <Body conversations={conversations} id={id} />
      </Panel.Body>
    </Panel>
  );
};

export default ChatList;
