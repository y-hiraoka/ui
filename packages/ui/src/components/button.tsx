import { ComponentProps, FC } from "react";

export const Button: FC<ComponentProps<"button">> = (props) => {
  return <button {...props} />;
};
