"use client";

import { Button } from "@/components/ui/button";
import { buttonSmoothType } from "@/types";
import { FC } from "react";

/**
 * button that acts as a link within the same page as it goes to the given id element smoothly
 */
export const ButtonSmooth: FC<buttonSmoothType> = ({ id, ...props }) => {
  const gotoElement = () =>
    document
      .getElementById(id)
      ?.scrollIntoView({ block: "center", behavior: "smooth" });

  return <Button onClick={gotoElement} {...props} />;
};
