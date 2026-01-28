import { linkComponentType } from "@/types";
import { btnSize } from "@/utils/helper";
import Link from "next/link";
import { FC } from "react";

export const LinkComponent: FC<linkComponentType> = ({
  link,
  children,
  className,
  size = "sm",
}) => {
  return (
    <Link
      href={link}
      className={`${className} ${btnSize({ size })} button smooth-transition`}
    >
      {children}
    </Link>
  );
};
