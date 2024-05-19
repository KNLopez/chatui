import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import menu from "@/assets/menu.svg";
import gear from "@/assets/gear.svg";

const Sidebar = () => {
  return (
    <aside
      className="
      h-screen
      w-[88px]
      flex
      flex-col
      justify-start
      items-center
      p-4
    "
    >
      <Image src={Logo} alt="logo" className="mb-8" />

      <nav>
        {/* ideally we want to map around menu items */}
        <Image src={menu} alt="menu" />
      </nav>
      <div className="mt-auto">
        <Image src={gear} alt="menu" />
      </div>
    </aside>
  );
};

export default Sidebar;
