import Avatar from "@/app/components/shared/Avatar";
import { Message } from "@/types/message";
import { User } from "@/types/user";
import MessageInput from "./MessageInput";

type BodyProps = {
  messages: Message[];
  sender: User;
};

const USER_ID = "2";
const USER_AVATAR = "https://robohash.org/TheUSER";

const getPadding = (sameSender: boolean, senderID: string) => {
  if (sameSender && senderID === USER_ID) {
    return "mr-14";
  }
  if (sameSender && senderID !== USER_ID) {
    return "ml-14";
  }
  return "";
};

const Body = ({ messages, sender }: BodyProps) => {
  return (
    <div className="relative flex flex-col h-[calc(100%-81px)]">
      <div className="flex flex-col overflow-y-auto p-4 gap-2">
        {messages.map((message: Message, index: number) => {
          const sameSender =
            index > 0 && messages[index - 1].senderID === message.senderID;
          return (
            <div
              key={index}
              className={`flex gap-2 ${
                message.senderID === USER_ID ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex gap-2 items-start w-full ${
                  message.senderID === USER_ID ? "flex-row-reverse" : ""
                }`}
              >
                {(index === 0 || !sameSender) && (
                  <Avatar
                    src={
                      message.senderID === USER_ID ? USER_AVATAR : sender.avatar
                    }
                    alt="avatar"
                    size="sm"
                  />
                )}
                <div
                  className={`p-2 px-4 rounded-lg max-w-[50%] ${
                    message.senderID === USER_ID
                      ? "bg-primary-600 text-white"
                      : "bg-gray-200 text-black"
                  } ${getPadding(sameSender, message.senderID)}`}
                >
                  {message.message}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <MessageInput />
    </div>
  );
};

export default Body;
