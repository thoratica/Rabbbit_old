import { motion, spring } from "framer-motion";

const Switch: React.FC<{ onState: [boolean, React.Dispatch<React.SetStateAction<boolean>>] }> = ({
  onState: [on, setOn],
}) => {
  return (
    <div
      className={`w-10 h-6 flex ${
        on ? "justify-end bg-emerald-500" : "justify-start bg-gray-400/70"
      } transition-colors duration-300 rounded-full p-1 cursor-pointer`}
      onClick={() => setOn((on) => !on)}
    >
      <motion.div className="bg-white w-4 h-4 rounded-full" layout transition={spring} />
    </div>
  );
};

export default Switch;
