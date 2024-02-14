"use client";

import { Button } from "@y-hiraoka/ui/components";
import { useThemeColors } from "@y-hiraoka/ui/theme";
import { FC } from "react";

const Page: FC = () => {
  const { danger, setDangerColor, resetDangerColor } = useThemeColors();

  return (
    <div>
      <div>
        <label>
          <span>Danger:</span>
          <input
            type="color"
            value={danger}
            onChange={(e) => setDangerColor(e.target.value)}
          />
        </label>
        <Button onClick={resetDangerColor}>Reset</Button>
      </div>
      <div className="border w-80">
        <div className="bg-danger-50 h-12" />
        <div className="bg-danger-100 h-12" />
        <div className="bg-danger-200 h-12" />
        <div className="bg-danger-300 h-12" />
        <div className="bg-danger-400 h-12" />
        <div className="bg-danger-500 h-12" />
        <div className="bg-danger-600 h-12" />
        <div className="bg-danger-700 h-12" />
        <div className="bg-danger-800 h-12" />
        <div className="bg-danger-900 h-12" />
        <div className="bg-danger-950 h-12" />
      </div>
    </div>
  );
};

export default Page;
