"use client";

import { Button } from "@y-hiraoka/ui/components";
import { useThemeColors } from "@y-hiraoka/ui/theme";
import { FC } from "react";

const Page: FC = () => {
  const { warning, setWarningColor, resetWarningColor } = useThemeColors();

  return (
    <div>
      <div>
        <label>
          <span>Warning:</span>
          <input
            type="color"
            value={warning}
            onChange={(e) => setWarningColor(e.target.value)}
          />
        </label>
        <Button onClick={resetWarningColor}>Reset</Button>
      </div>
      <div className="border w-80">
        <div className="bg-warning-50 h-12" />
        <div className="bg-warning-100 h-12" />
        <div className="bg-warning-200 h-12" />
        <div className="bg-warning-300 h-12" />
        <div className="bg-warning-400 h-12" />
        <div className="bg-warning-500 h-12" />
        <div className="bg-warning-600 h-12" />
        <div className="bg-warning-700 h-12" />
        <div className="bg-warning-800 h-12" />
        <div className="bg-warning-900 h-12" />
        <div className="bg-warning-950 h-12" />
      </div>
    </div>
  );
};

export default Page;
