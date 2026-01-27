import { cardPropType } from "@/types";
import { FC } from "react";

export const Card: FC<cardPropType> = ({ children, className }) => {
  return <div className={`${className} border rounded-lg`}>{children}</div>;
};
