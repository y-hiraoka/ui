"use client";

import { Button } from "@y-hiraoka/ui/components";
import { useThemeColors } from "@y-hiraoka/ui/theme";
import { FC } from "react";

const Page: FC = () => {
  const { sub, setSubColor, resetSubColor } = useThemeColors();

  return (
    <div>
      <div>
        <label>
          <span>Sub:</span>
          <input
            type="color"
            value={sub}
            onChange={(e) => setSubColor(e.target.value)}
          />
        </label>
        <Button onClick={resetSubColor}>Reset</Button>
      </div>
      <div className="border w-80">
        <div className="bg-sub-50 h-12" />
        <div className="bg-sub-100 h-12" />
        <div className="bg-sub-200 h-12" />
        <div className="bg-sub-300 h-12" />
        <div className="bg-sub-400 h-12" />
        <div className="bg-sub-500 h-12" />
        <div className="bg-sub-600 h-12" />
        <div className="bg-sub-700 h-12" />
        <div className="bg-sub-800 h-12" />
        <div className="bg-sub-900 h-12" />
        <div className="bg-sub-950 h-12" />
      </div>
    </div>
  );
};

export default Page;
