import { ReactNode } from "react";

type headingColor = 'primary' | 'secondary' | 'tertiary' | 'neutral-light' | 'neutral-dark';
type headingTag = 'h1'| 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type textAlign = 'left' | 'center' | 'right';

interface HeadingProps {
    children: ReactNode;
    className?: string;
    color?: headingColor;
    tag?: headingTag;
    spacing?: boolean;
    textAlign?: textAlign;
}

export type { HeadingProps, headingColor, headingTag, textAlign };