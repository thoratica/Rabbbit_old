import { useState } from "react";
import Switch from "../../common/Switch";

const SetUrlModalContent = () => {
  const [on, setOn] = useState(true);

  return (
    <div className="py-0.5 flex flex-col w-full">
      <h3 className="text-black text-[19px] font-bold mx-5">URL 설정</h3>
      <div
        className={`flex items-center ${
          on ? "bg-emerald-50" : "bg-gray-100"
        } transition-colors duration-300 mx-2.5 mt-1 px-4 py-2 h-12 rounded-xl`}
        onClick={() => setOn((on) => !on)}
      >
        <div
          className={`${
            on ? "text-emerald-500" : "text-gray-500"
          } transition-colors duration-300 text-base font-bold leading-none`}
        >
          {on ? "켜짐" : "꺼짐"}
        </div>
        <div className="ml-auto">
          <Switch onState={[on, setOn]} />
        </div>
      </div>
      <div className="mx-5 mt-2 mb-3.5 text-gray-600 font-medium">
        {on ? "성인 작품이 표시되지 않습니다." : "성인 작품을 포함한 모든 작품이 표시됩니다."}
      </div>
    </div>
  );
};

export default SetUrlModalContent;
