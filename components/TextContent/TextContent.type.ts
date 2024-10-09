import { ReactNode } from "react";

type textContentColor = 'primary' | 'secondary' | 'tertiary' | 'neutral-light' | 'neutral-dark';
type textAlign = 'left' | 'center' | 'right';
type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface TextContentProps {
    isInline?: boolean;
    className?: string;
    color?: textContentColor;
    textAlign?: textAlign;
    size?: size;
    children?: ReactNode;
}

export type { TextContentProps, textAlign, textContentColor };