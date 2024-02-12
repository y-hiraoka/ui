import { ColorModeSwitch } from "@y-hiraoka/ui/components";
import { FC } from "react";

const sizes = ["sm", "md", "lg"] as const;
const colors = ["main", "sub", "normal"] as const;

const Page: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {sizes.map((size) =>
        colors.map((color) => (
          <ColorModeSwitch key={`${size}-${color}`} size={size} color={color} />
        )),
      )}
    </div>
  );
};

export default Page;
