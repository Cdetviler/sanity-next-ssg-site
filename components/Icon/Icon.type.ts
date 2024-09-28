type iconColor = 'primary' | 'secondary' | 'tertiary' | 'neutral-light' | 'neutral-dark' | 'inherit';
type iconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none' | number;
type iconType = 
'CircleAlert' |
'Menu' | 
'ArrowLeft' | 
'ArrowRight' | 
'ArrowUp' | 
'ArrowDown' |
'ArrowUpRight' |
'ArrowUpLeft' |
'ArrowDownRight' |
'ArrowDownLeft' |
'ArrowBigLeftDash' |
'ArrowBigRightDash' |
'ArrowBigDownDash' |
'ArrowBigUpDash' |
'ChevronRight' |
'ChevronLeft' |
'ChevronDown' |
'ChevronUp' |
'Maximize' |
'Minimize' |
'Twitter' |
'Facebook' |
'Linkedin' |
'Github' |
'RefreshCw'

interface IconProps {
    color?: iconColor;
    size?: iconSize;
    type: iconType;
    className?: string;
}

export type { IconProps, iconColor, iconSize, iconType };