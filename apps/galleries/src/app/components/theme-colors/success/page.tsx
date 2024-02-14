"use client";

import { Button } from "@y-hiraoka/ui/components";
import { useThemeColors } from "@y-hiraoka/ui/theme";
import { FC } from "react";

const Page: FC = () => {
  const { success, setSuccessColor, resetSuccessColor } = useThemeColors();

  return (
    <div>
      <div>
        <label>
          <span>Success:</span>
          <input
            type="color"
            value={success}
            onChange={(e) => setSuccessColor(e.target.value)}
          />
        </label>
        <Button onClick={resetSuccessColor}>Reset</Button>
      </div>
      <div className="border w-80">
        <div className="bg-success-50 h-12" />
        <div className="bg-success-100 h-12" />
        <div className="bg-success-200 h-12" />
        <div className="bg-success-300 h-12" />
        <div className="bg-success-400 h-12" />
        <div className="bg-success-500 h-12" />
        <div className="bg-success-600 h-12" />
        <div className="bg-success-700 h-12" />
        <div className="bg-success-800 h-12" />
        <div className="bg-success-900 h-12" />
        <div className="bg-success-950 h-12" />
      </div>
    </div>
  );
};

export default Page;
