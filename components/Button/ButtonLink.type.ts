import { MouseEventHandler, ReactNode } from "react"
import { UrlObject } from "url";
import type { LinkProps as NextLinkProps } from 'next/link';  // Import Next.js LinkProps

type buttonLinkColor = 'primary' | 'secondary' | 'tertiary';
type buttonLinkSize = 'sm' | 'md' | 'lg';
type buttonLinkHierarchy = 'contained' | 'outlined' | 'ghost';

interface ButtonLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>, NextLinkProps {
    href: string | UrlObject;
    children: ReactNode;
    color?: buttonLinkColor;
    external?: boolean;
    hierarchy?: buttonLinkHierarchy;
    size?: buttonLinkSize;
} 

export type { ButtonLinkProps, buttonLinkColor, buttonLinkSize, buttonLinkHierarchy };