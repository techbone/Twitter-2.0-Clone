import SideBarRow from "./SidebarRow";

import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
  BeakerIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

const SideBar = () => {
  return (
    <div className="flex flex-col">
      <img
        className="h-10 w-10"
        src="https://links.papareact.com/drq"
        alt="TwitterIcon"
      />

      <SideBarRow Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={HashtagIcon} title="Explore" />
      <SideBarRow Icon={BellIcon} title="Notifications" />
      <SideBarRow Icon={MailIcon} title="Messages" />
      <SideBarRow Icon={BookmarkIcon} title="Bookmaerks" />
      <SideBarRow Icon={CollectionIcon} title="Lists" />
      <SideBarRow Icon={UserIcon} title="Sign In" />
      <SideBarRow Icon={DotsHorizontalIcon} title="Lists" />
    </div>
  );
};

export default SideBar;
