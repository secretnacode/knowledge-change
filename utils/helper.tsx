import { buttonPropType } from "@/types";

/**
 * function that return a button size, used by button and link component
 */
export const btnSize = ({ size }: Pick<buttonPropType, "size">): string => {
  switch (size) {
    case "sm":
      return "px-3 py-2";
    case "md":
      return "px-3.5 py-2";
    case "lg":
      return "px-5 py-2";
    default:
      return "";
  }
};
