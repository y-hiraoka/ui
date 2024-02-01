import { Select } from "@y-hiraoka/ui/components";
import { FC } from "react";

const sizes = ["sm", "md", "lg"] as const;
const colors = ["main", "sub"] as const;

const Page: FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      {sizes.map((size) =>
        colors.map((color) => (
          <div key={`${size}-${color}`}>
            <Select size={size} color={color}>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
            </Select>
          </div>
        )),
      )}
    </div>
  );
};

export default Page;
