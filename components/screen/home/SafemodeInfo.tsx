import { ChevronRightIcon, ShieldIcon } from "../../icons";
import SafemodeModalContent from "./SafemodeModalContent";

const SafemodeInfo: React.FC<{
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  setChildren: React.Dispatch<React.SetStateAction<JSX.Element>>;
}> = ({ setState: setOpen, setChildren }) => {
  return (
    <div
      className="flex items-center bg-emerald-50 hover:bg-emerald-100 focus:bg-emerald-100 transition-colors duration-300 mx-4 mt-3 p-2 rounded-xl"
      onClick={() => {
        setChildren(<SafemodeModalContent />);
        setOpen(true);
      }}
    >
      <div className="h-8 w-8 flex items-center justify-center flex-shrink-0 bg-emerald-100 rounded-full">
        <ShieldIcon size={20} color="#10b981" />
      </div>
      <div className="flex flex-col ml-2">
        <div className="text-emerald-500 text-base font-semibold leading-none">안전 모드가 켜져 있어요.</div>
      </div>
      <div className="ml-auto">
        <ChevronRightIcon size={18} color="#10b981" />
      </div>
    </div>
  );
};

export default SafemodeInfo;
