import { ChevronRightIcon, ShieldIcon } from "../../icons";

const SafemodeInfo = () => {
  return (
    <a className="flex items-center bg-green-50 hover:bg-green-100 focus:bg-green-100) transition-colors duration-300 mx-4 mt-3 p-2 rounded-lg">
      <div className="h-8 w-8 flex items-center justify-center flex-shrink-0 bg-green-100 rounded-full">
        <ShieldIcon size={20} color="#22c55e" />
      </div>
      <div className="flex flex-col ml-2">
        <div className="text-green-500 text-base font-semibold leading-none">안전 모드가 켜져 있어요.</div>
      </div>
      <div className="ml-auto">
        <ChevronRightIcon size={18} color="#22c55e" />
      </div>
    </a>
  );
};

export default SafemodeInfo;
