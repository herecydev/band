import { Link as RemixLink } from "@remix-run/react";
import { PropsWithChildren } from "react";

export const Link = ({ to, children }: { to: string } & PropsWithChildren) => (
  <RemixLink to={to} className="hover:underline">
    {children}
  </RemixLink>
);
