"use client";
import InfoCard from "@/app/components/InfoCard";
import Tag from "@/app/components/shared/Tag";
import { Conversation } from "@/types/converstaion";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import Link from "next/link";

// replace dayjs locale
import "dayjs/locale/en";

dayjs.extend(updateLocale);
dayjs.extend(relativeTime);

dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    m: "%dm",
    mm: "%dm",
    h: "%dh",
    hh: "%dh",
    d: "%dd",
    dd: "%dd",
    M: "%m",
    MM: "%dm",
    y: "%dy",
    yy: "%dy",
  },
});

const ConversationCard = ({
  conversation,
  activeID,
}: {
  activeID: string;
  conversation: Conversation;
}) => {
  const { tags, sender, lastMessage, lastMessageTime, id } = conversation;

  const { name, avatar } = sender;
  const isActive = activeID === id;

  return (
    <>
      <Link href={`/chat/${id}`}>
        <InfoCard
          image={avatar}
          title={name}
          subtitle={lastMessage}
          isActive={isActive}
          rightInfo={dayjs(lastMessageTime).fromNow(true)}
        >
          <div className="flex items-center justify-between gap-2 mt-3">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} text={tag} />
            ))}
          </div>
        </InfoCard>
      </Link>
    </>
  );
};

export default ConversationCard;
