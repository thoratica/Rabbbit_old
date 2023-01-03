import { AlertCircleIcon, ChevronRightIcon } from "../../icons";
import SetUrlModalContent from "./SetUrlModalContent";

const SetUrlInfo: React.FC<{
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  setChildren: React.Dispatch<React.SetStateAction<JSX.Element>>;
}> = ({ setState: setOpen, setChildren }) => {
  return (
    <div
      className="flex items-center bg-rose-50 mx-4 mt-3 p-2 rounded-xl"
      onClick={() => {
        setChildren(<SetUrlModalContent />);
        setOpen(true);
      }}
    >
      <div className="h-8 w-8 flex items-center justify-center flex-shrink-0 bg-rose-100 rounded-full">
        <AlertCircleIcon size={20} color="#f43f5e" />
      </div>
      <div className="flex flex-col ml-2">
        <div className="text-rose-500 text-base font-semibold leading-none">URL을 설정해주세요.</div>
      </div>
      <div className="ml-auto">
        <ChevronRightIcon size={18} color="#f43f5e" />
      </div>
    </div>
  );
};

export default SetUrlInfo;
