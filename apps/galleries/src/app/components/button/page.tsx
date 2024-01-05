"use client";

import { FC, useState } from "react";
import { Button, Select, Switch } from "@y-hiraoka/ui";
import { FaTwitter } from "react-icons/fa";

const variants = ["outline", "solid", "ghost", "glass"] as const;
const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
const colors = ["main", "sub", "normal", "danger"] as const;
const justifies = ["start", "center", "end", "between"] as const;

const Page: FC = () => {
  const [variant, setVariant] = useState<(typeof variants)[number]>("outline");
  const [size, setSize] = useState<(typeof sizes)[number]>("md");
  const [color, setColor] = useState<(typeof colors)[number]>("main");
  const [hasStartIcon, setHasStartIcon] = useState(false);
  const [hasEndIcon, setHasEndIcon] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [fullWidth, setFullWidth] = useState(false);
  const [justify, setJustify] = useState<(typeof justifies)[number]>("center");

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-2 gap-4"
      >
        <label>
          variant
          <Select
            value={variant}
            onChange={(e) => setVariant(e.target.value as typeof variant)}
          >
            {variants.map((variant) => (
              <option key={variant} value={variant}>
                {variant}
              </option>
            ))}
          </Select>
        </label>
        <label>
          size
          <Select
            value={size}
            onChange={(e) => setSize(e.target.value as typeof size)}
          >
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </Select>
        </label>
        <label>
          color
          <Select
            value={color}
            onChange={(e) => setColor(e.target.value as typeof color)}
          >
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </Select>
        </label>
        <Switch label="startIcon" onCheckedChange={setHasStartIcon} />
        <Switch label="endIcon" onCheckedChange={setHasEndIcon} />
        <Switch label="isLoading" onCheckedChange={setIsLoading} />
        <Switch label="isDisabled" onCheckedChange={setIsDisabled} />
        <Switch label="fullWidth" onCheckedChange={setFullWidth} />
        <label>
          justify
          <Select
            value={justify}
            onChange={(e) => setJustify(e.target.value as typeof justify)}
          >
            {justifies.map((justify) => (
              <option key={justify} value={justify}>
                {justify}
              </option>
            ))}
          </Select>
        </label>
      </form>
      <Button
        className="mt-8"
        variant={variant}
        size={size}
        color={color}
        startIcon={hasStartIcon ? <FaTwitter /> : undefined}
        endIcon={hasEndIcon ? <FaTwitter /> : undefined}
        isLoading={isLoading}
        disabled={isDisabled}
        fullWidth={fullWidth}
        justify={justify}
      >
        Component
      </Button>
    </div>
  );
};

export default Page;
