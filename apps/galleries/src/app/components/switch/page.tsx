import { Switch } from "@y-hiraoka/ui";
import { FC } from "react";

const sizes = ["sm", "md", "lg"] as const;
const colors = ["main", "sub"] as const;
const isDisableds = [true, false] as const;

const Page: FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      {sizes.map((size) =>
        colors.map((color) =>
          isDisableds.map((isDisabled) => (
            <div key={`${size}-${color}-${isDisabled}`}>
              <Switch
                size={size}
                color={color}
                label="Component"
                disabled={isDisabled}
              />
            </div>
          )),
        ),
      )}
    </div>
  );
};

export default Page;
