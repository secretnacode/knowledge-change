import { buttonPropType } from "@/types";
import { FC } from "react";

export const Button: FC<buttonPropType> = ({
  className = "",
  children,
  size = "sm",
}) => {
  const btnSize = () => {
    switch (size) {
      case "sm":
        return "px-3 py-2";
      case "md":
        return "px-3.5 py-2";
      case "lg":
        return "px-5 py-2";
    }
  };

  return (
    <button
      className={`${className} ${btnSize()} rounded-md cursor-pointer text-sm smooth-transition font-medium flex flex-row items-center`}
    >
      {children}
    </button>
  );
};
