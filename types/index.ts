import { ButtonHTMLAttributes, ReactNode } from "react";

export type childrenType = { children?: ReactNode };

export type childrenPropType = Readonly<childrenType>;

export type classNameType = { className?: string };

export type buttonPropType = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
};

export type buttonSmoothType = buttonPropType & { id: string };

export type cardPropType = childrenType & classNameType;

export type linkComponentType = childrenType &
  classNameType &
  Pick<buttonPropType, "size"> & { link: string };
