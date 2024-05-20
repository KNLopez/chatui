import { Conversation } from "@/types/converstaion";
import ConversationCard from "./ConversationCard";

const ChatConversationBody = ({
  id,
  conversations,
}: {
  id: string;
  conversations: Conversation[];
}) => {
  return (
    <div className=" h-full overflow-auto">
      <div
        className="
        bg-white
        p-4
        sticky
        top-0
        w-full
      "
      >
        <input
          type="search"
          placeholder="Search Messages"
          className="
          w-full
           bg-gray-100
            rounded-lg
            p-4
            font-semibold
          "
        />
      </div>
      <div className="flex flex-col gap-2 px-4 pb-4">
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
