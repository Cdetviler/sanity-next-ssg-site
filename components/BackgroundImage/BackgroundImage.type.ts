import { ReactNode } from "react";

type verticalBackgroundPositions = 
'center' |
'top' |
'bottom' |
`${number}%` |
`${number}px`;

type horizontalBackgroundPositions = 
'center' |
'left' |
'right' |
`${number}%` |
`${number}px`;

type lengthUnits = 'auto' |
`${number}%` |
`${number}px`|
`${number}em`|
`${number}rem`|
`${number}vw`|
`${number}vh`;

type backgroundOrigins = 'padding-box' | 'border-box' | 'content-box';
type backgroundRepeat =
'repeat' |
'repeat-x' |
'repeat-y' |
'no-repeat' |
'space' |
'round';
type backgroundSizes =
'auto' | 'cover' | 'contain' | lengthUnits | `${lengthUnits} ${lengthUnits}`;
;

type sizeDimensions = lengthUnits | 'full';

interface BackgroundImageProps {
    children?: ReactNode;
    className?: string;
    containerWidth?: sizeDimensions;
    containerHeight?: sizeDimensions;
    src: string;
    alt: string;
    paralax?: 'none' | 'fixed' | 'local';
    verticalPosition?: verticalBackgroundPositions;
    horizontalPosition?: horizontalBackgroundPositions;
    backgroundOrigin?: backgroundOrigins;
    backgroundRepeat?: backgroundRepeat;
    backgroundSize?: backgroundSizes;
    backgroundDarkness?: 'none' | 'dark' | 'darker' | 'darkest';
}

export type { BackgroundImageProps, backgroundOrigins, backgroundRepeat, backgroundSizes, verticalBackgroundPositions, horizontalBackgroundPositions, sizeDimensions};