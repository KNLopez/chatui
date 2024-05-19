import ChatConversation from "../components/ChatConversation";
import ChatList from "../components/ChatConversationList/index";
import ChatInfo from "../components/ChatInfo";

const Chat = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;
  return (
    <div
      className="flex
        w-full
        bg-white
        border-r
        border-gray-200
        shadow-md
    "
    >
      <ChatList id={id} />
      <ChatConversation id={id} />
      <ChatInfo id={id} />
    </div>
  );
};

export default Chat;
