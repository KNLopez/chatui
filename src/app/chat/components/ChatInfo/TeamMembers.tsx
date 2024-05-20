import InfoCard from "@/app/components/InfoCard";
import Tag from "@/app/components/shared/Tag";
import { getUsers } from "@/mocks/users";

const TeamMembers = async () => {
  const members = await getUsers();

  return (
    <div className="py-8 px-4 h-1/2 overflow-auto">
      <div className="flex gap-2 mb-4">
        <h2 className="font-semibold">Team Members</h2>
        <Tag tag="chip" text={members.length.toString()} />
      </div>
      {members.map((member) => (
        <InfoCard
          key={member.id}
          title={member.name}
          subtitle={member.title}
          image={member.avatar}
        />
      ))}
    </div>
  );
};

export default TeamMembers;
