import Title from "@/app/components/shared/Title";
import Avatar from "@/app/components/shared/Avatar";
import Image from "next/image";
import CallIcon from "@/assets/call.svg";
import { User } from "@/types/user";

const Header = ({ sender }: { sender: User }) => {
  return (
    <>
      <div
        className="
        flex
        justify-between
        items-center
        gap-4
       
    "
      >
        <Avatar src={sender.avatar} alt={sender.name} />
        <div>
          <Title>{sender.name}</Title>
          <p
            className="
            text-xs
            font-semibold
            text-gray-400
            "
          >
            <span
              className="
                    inline-block
                    h-2
                    w-2
                    bg-green-400
                    rounded-full
                    mr-1
                "
            />
            {sender.status}
          </p>
        </div>
      </div>
      <button
        className="
        flex
        items-center
        justify-center
        rounded-lg
        px-4
        py-3
        gap-2
        bg-primary-100
        text-primary-700
        hover:bg-primary-200
        capitalize
        font-semibold
      "
      >
        <Image src={CallIcon} alt="call" height={24} width={24} />
        call
      </button>
    </>
  );
};

export default Header;
