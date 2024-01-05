import { FC } from "react";
import { Switch } from "@y-hiraoka/ui";

const sizes = ["sm", "md", "lg"] as const;
const colors = ["main", "sub"] as const;

const Page: FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      {sizes.map((size) =>
        colors.map((color) => (
          <div key={`${size}-${color}`}>
            <Switch size={size} color={color} label="Component" />
          </div>
        ))
      )}
    </div>
  );
};

export default Page;
