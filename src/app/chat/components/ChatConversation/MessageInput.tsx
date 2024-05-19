import Image from "next/image";
import UploadIcon from "@/assets/upload.svg";
import SendIcon from "@/assets/send.svg";

const MessageInput = () => {
  return (
    <div
      className="
        flex
       w-full
      p-8
    gap-4
        "
    >
      <Image src={UploadIcon} alt="Upload File" />
      <div className="border flex flex-1 rounded-md px-4 gap-4">
        <input
          type="text"
          placeholder="Type a message"
          className="p-4 rounded-lg w-full font-semibold
            focuse-visible:outline-none
            !outline-none
          "
        />
        <button>
          <Image src={SendIcon} alt="Send message" />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
