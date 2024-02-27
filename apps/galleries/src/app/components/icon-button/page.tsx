"use client";

import { IconButton, Select, Switch } from "@y-hiraoka/ui/components";
import Link from "next/link";
import { FC, useState } from "react";
import { FaTwitter } from "react-icons/fa";

const variants = ["outline", "solid", "ghost", "glass"] as const;
const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
const colors = ["main", "sub", "normal", "danger"] as const;

const Page: FC = () => {
  const [variant, setVariant] = useState<(typeof variants)[number]>("outline");
  const [size, setSize] = useState<(typeof sizes)[number]>("md");
  const [color, setColor] = useState<(typeof colors)[number]>("main");
  const [isDisabled, setIsDisabled] = useState(false);

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
        <Switch label="isDisabled" onCheckedChange={setIsDisabled} />
      </form>
      <div className="flex space-x-4">
        <IconButton
          className="mt-8"
          variant={variant}
          size={size}
          color={color}
          icon={<FaTwitter />}
          disabled={isDisabled}
        />
        <IconButton
          component={Link}
          href="/"
          className="mt-8"
          variant={variant}
          size={size}
          color={color}
          icon={<FaTwitter />}
        />
      </div>
    </div>
  );
};

export default Page;
