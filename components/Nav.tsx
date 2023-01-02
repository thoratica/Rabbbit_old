import { useRouter } from "next/router";

const Nav: React.FC<{
  routes: { icon: React.FC<{ size: number; color: string }>; label: string; route: string }[];
}> = ({ routes }) => {
  const router = useRouter();

  return (
    <nav
      className="flex h-14 w-full bg-white rounded-t-xl fixed bottom-0"
      style={{
        boxShadow: "rgba(0 0 0 / 15%) 0px 10px 50px",
      }}
    >
      {routes.map(({ icon: Icon, label, route }, i) => {
        const focused = router.asPath === route;

        return (
          <a href={route} className="h-14 flex flex-col items-center justify-center w-full" key={i}>
            <div className="h-5 mt-1">
              <Icon size={22} color={focused ? "#3b82f6" : "#6b7280"} />
            </div>
            <span
              className={`text-[11px] font-sans mt-0.5 ${
                focused ? "text-blue-500 font-bold" : "text-gray-500 font-semibold"
              }`}
            >
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
