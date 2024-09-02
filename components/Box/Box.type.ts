import { ReactNode } from "react"

type boxColor = 'primary' | 'secondary' | 'tertiary' | 'neutral';
type boxHierarchy = 'contained' | 'outlined' | 'ghost';
type boxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'auto';
type boxHeight = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'auto';
type boxPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type boxMargin = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto';
type boxCornerRounding = 'square' | 'rounded' | 'circle'

interface BoxProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    color?: boxColor;
    hierarchy?: boxHierarchy;
    height?: boxHeight;
    width?: boxWidth;
    padding?: boxPadding;
    margin?: boxMargin;
    rounding?: boxCornerRounding;
}

export type { BoxProps, boxColor, boxHierarchy, boxWidth, boxHeight, boxPadding, boxMargin, boxCornerRounding };