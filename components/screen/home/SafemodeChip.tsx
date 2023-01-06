import { motion, spring } from "framer-motion";
import { ChevronRightIcon, ShieldIcon } from "../../icons";
import SafemodeModalContent from "./SafemodeModalContent";

const SafemodeChip: React.FC<{
  onState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  setChildren: React.Dispatch<React.SetStateAction<JSX.Element>>;
}> = ({ onState: [on, setOn], setState: setOpen, setChildren }) => {
  return (
    // <div
    //   className="flex items-center bg-emerald-50 w-max p-px rounded-full ml-auto mb-0.5"
    //   onClick={() => {
    //     setChildren(<SafemodeModalContent />);
    //     setOpen(true);
    //   }}
    // >
    //   <div className="flex flex-col ml-2 mr-1">
    //     <div className="text-emerald-500 text-xs font-bold leading-none">켜짐</div>
    //   </div>
    //   <div className="h-7 w-7 flex items-center justify-center flex-shrink-0 bg-emerald-100 rounded-full">
    //     <ShieldIcon size={16} color="#10b981" />
    //   </div>
    // </div>
    <div
      className={`w-14 h-7 flex items-center [-webkit-tap-highlight-color:_transparent] justify-between ${
        on ? "flex-row bg-emerald-400" : "flex-row-reverse bg-gray-300"
      } transition-colors duration-300 rounded-full p-1 cursor-pointer`}
      onClick={() => setOn((on) => !on)}
    >
      <span className={`text-[11px] font-semibold ${on ? "text-white ml-1 mr-[3px]" : "text-gray-500 ml-[3px] mr-1"}`}>켜짐</span>
      <motion.div
        className={`${
          on ? "bg-white" : "bg-gray-50"
        } transition-colors duration-300 w-5 h-5 rounded-full flex flex-shrink-0 items-center justify-center`}
        layout
        transition={spring}
      >
        <ShieldIcon size={14} color={on ? "#34d399" : "#9ca3afcc"} />
      </motion.div>
    </div>
  );
};

export default SafemodeChip;
