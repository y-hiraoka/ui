import { FC } from "react";
import { Button } from "@y-hiraoka/ui";
import { FaTwitter } from "react-icons/fa";
import classNames from "classnames";

const variants = ["outline", "solid", "ghost", "glass"] as const;
const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
const colors = ["main", "sub", "normal", "danger"] as const;
const startIcons = [undefined, <FaTwitter />] as const;
const endIcons = [undefined, <FaTwitter />] as const;
const isLoadings = [false, true] as const;
const isDisableds = [false, true] as const;
const fullWidths = [false, true] as const;
const justifies = ["start", "center", "end", "between"] as const;

const Page: FC = () => {
  return (
    <div className="grid grid-cols-4">
      {variants.map((variant) =>
        sizes.map((size) =>
          colors.map((color) =>
            startIcons.map((startIcon) =>
              endIcons.map((endIcon) =>
                isLoadings.map((isLoading) =>
                  isDisableds.map((isDisabled) =>
                    fullWidths.map((fullWidth) =>
                      justifies.map((justify) => (
                        <div
                          className={classNames(
                            variant === "glass" && "bg-gray-950",
                            "p-2"
                          )}
                          key={`${variant}-${size}-${color}-${startIcon}-${endIcon}-${isLoading}`}
                        >
                          <Button
                            className="justify-self-start"
                            variant={variant}
                            size={size}
                            color={color}
                            startIcon={startIcon}
                            endIcon={endIcon}
                            isLoading={isLoading}
                            disabled={isDisabled}
                            fullWidth={fullWidth}
                            justify={justify}
                          >
                            Component
                          </Button>
                        </div>
                      ))
                    )
                  )
                )
              )
            )
          )
        )
      )}
    </div>
  );
};

export default Page;
