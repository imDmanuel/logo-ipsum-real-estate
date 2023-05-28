import NextLink, { LinkProps } from "next/link";
import React from "react";

export const NavLink = (
  props: Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps & {
      children?: React.ReactNode;
    } & React.RefAttributes<HTMLAnchorElement>
) => {
  return <NextLink {...props} className={"text-white font-semibold text-sm"} />;
};
