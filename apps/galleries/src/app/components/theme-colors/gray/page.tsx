"use client";

import { Button } from "@y-hiraoka/ui/components";
import { useThemeColors } from "@y-hiraoka/ui/theme";
import { FC } from "react";

const Page: FC = () => {
  const { gray, setGrayColor, resetGrayColor } = useThemeColors();

  return (
    <div>
      <div>
        <label>
          <span>Gray:</span>
          <input
            type="color"
            value={gray}
            onChange={(e) => setGrayColor(e.target.value)}
          />
        </label>
        <Button onClick={resetGrayColor}>Reset</Button>
      </div>
      <div className="border w-80">
        <div className="bg-gray-50 h-12" />
        <div className="bg-gray-100 h-12" />
        <div className="bg-gray-200 h-12" />
        <div className="bg-gray-300 h-12" />
        <div className="bg-gray-400 h-12" />
        <div className="bg-gray-500 h-12" />
        <div className="bg-gray-600 h-12" />
        <div className="bg-gray-700 h-12" />
        <div className="bg-gray-800 h-12" />
        <div className="bg-gray-900 h-12" />
        <div className="bg-gray-950 h-12" />
      </div>
    </div>
  );
};

export default Page;
