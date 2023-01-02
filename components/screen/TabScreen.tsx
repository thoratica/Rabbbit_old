import Nav from "./Nav";
import { ExploreIcon, HomeIcon, MyIcon } from "../icons";

const routes: { icon: React.FC<{ size: number; color: string }>; label: string; route: string }[] = [
  { icon: HomeIcon, label: "홈", route: "/" },
  { icon: ExploreIcon, label: "탐색", route: "/explore" },
  { icon: MyIcon, label: "MY", route: "/my" },
];

const TabScreen: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="h-screen overflow-auto">{children}</div>
      <Nav routes={routes} />
    </>
  );
};

export default TabScreen;
