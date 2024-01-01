import { FC } from "react";
import { Button } from "@y-hiraoka/ui";
import { FaTwitter } from "react-icons/fa";

const variants = ["outline", "solid", "ghost", "glass"] as const;
const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
const colors = ["main", "sub", "normal", "danger"] as const;
const startIcons = [<FaTwitter />, undefined] as const;
const endIcons = [<FaTwitter />, undefined] as const;
const isLoadings = [true, false] as const;

const Page: FC = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {variants.map((variant) =>
        sizes.map((size) =>
          colors.map((color) =>
            startIcons.map((startIcon) =>
              endIcons.map((endIcon) =>
                isLoadings.map((isLoading) => (
                  <Button
                    className="justify-self-start"
                    key={`${variant}-${size}-${color}-${startIcon}-${endIcon}-${isLoading}`}
                    variant={variant}
                    size={size}
                    color={color}
                    startIcon={startIcon}
                    endIcon={endIcon}
                    isLoading={isLoading}
                  >
                    Component
                  </Button>
                ))
              )
            )
          )
        )
      )}
    </div>
  );
};

export default Page;
