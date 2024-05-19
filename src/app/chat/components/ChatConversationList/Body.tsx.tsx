import { Conversation } from "@/types/converstaion";
import ConversationCard from "../ConversationCard";

const ChatConversationBody = ({
  id,
  conversations,
}: {
  id: string;
  conversations: Conversation[];
}) => {
  return (
    <div className="p-4">
      <input
        type="search"
        placeholder="Search Messages"
        className="
            w-full
           bg-gray-100
            rounded-lg
            p-4
            mb-4
            font-semibold
          "
      />
      <div className="flex flex-col gap-2">
        {conversations.map((conversation, index) => (
          <ConversationCard
            key={index}
            activeID={id}
            conversation={conversation}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatConversationBody;
