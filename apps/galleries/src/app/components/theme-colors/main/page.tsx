"use client";

import { Button } from "@y-hiraoka/ui/components";
import { useThemeColors } from "@y-hiraoka/ui/theme";
import { FC } from "react";

const Page: FC = () => {
  const { main, setMainColor, resetMainColor } = useThemeColors();

  return (
    <div>
      <div>
        <label>
          <span>Main:</span>
          <input
            type="color"
            value={main}
            onChange={(e) => setMainColor(e.target.value)}
          />
        </label>
        <Button onClick={resetMainColor}>Reset</Button>
      </div>
      <div className="border w-80">
        <div className="bg-main-50 h-12" />
        <div className="bg-main-100 h-12" />
        <div className="bg-main-200 h-12" />
        <div className="bg-main-300 h-12" />
        <div className="bg-main-400 h-12" />
        <div className="bg-main-500 h-12" />
        <div className="bg-main-600 h-12" />
        <div className="bg-main-700 h-12" />
        <div className="bg-main-800 h-12" />
        <div className="bg-main-900 h-12" />
        <div className="bg-main-950 h-12" />
      </div>
    </div>
  );
};

export default Page;
