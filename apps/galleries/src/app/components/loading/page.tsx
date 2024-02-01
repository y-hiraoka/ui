import { Loading } from "@y-hiraoka/ui/components";
import { FC } from "react";

const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
const colors = ["main", "sub", "normal", "danger"] as const;

const Page: FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      {sizes.map((size) =>
        colors.map((color) => (
          <div key={`${size}-${color}`}>
            <Loading size={size} color={color} />
          </div>
        )),
      )}
    </div>
  );
};

export default Page;
