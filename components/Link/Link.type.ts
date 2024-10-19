import { ReactNode } from "react"
import { UrlObject } from "url";
import type { LinkProps as NextLinkProps } from 'next/link';

type linkVariant = 'dark' | 'light';

interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>, NextLinkProps {
    href: string | UrlObject;
    children: ReactNode;
    external?: boolean;
    variant?: linkVariant;
} 

export type { LinkProps, linkVariant };