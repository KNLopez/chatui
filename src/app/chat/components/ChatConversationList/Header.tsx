import Image from "next/image";
import Tag from "@/app/components/shared/Tag";
import CaretDownIcon from "@/assets/caretDown.svg";
import NewMessageIcon from "@/assets/newMessage.svg";
import Title from "@/app/components/shared/Title";

const Header = () => {
  return (
    <>
      <div
        className="
        flex
        justify-between
        items-center
        p-4
        gap-2
    "
      >
        <Title>Messages</Title>
        <Image src={CaretDownIcon} alt="caret down" priority />
        <Tag text="12" tag="chip" />
      </div>
      <Image
        src={NewMessageIcon}
        alt="New Message"
        className="cursor-pointer hover:scale-105"
        height={28}
        width={28}
        priority
      />
    </>
  );
};

export default Header;
