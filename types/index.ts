import { ReactNode } from "react";

export type childrenType = { children: ReactNode };

export type childrenPropType = Readonly<childrenType>;

export type classNameType = { className?: string };

export type buttonPropType = childrenType &
  classNameType & {
    size?: "sm" | "md" | "lg";
  };

export type cardPropType = childrenType & classNameType;
