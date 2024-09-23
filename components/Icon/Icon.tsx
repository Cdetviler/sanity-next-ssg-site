import React from "react";
import { icons } from "lucide-react";
import { IconProps } from "./Icon.type";
import styles from "./Icon.module.scss";

const VALID_VARIANTS = ['primary', 'secondary', 'tertiary', 'neutral-dark', 'neutral-light', 'inherit'];
const VALID_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];

export default function Icon({
    color = 'inherit',
    type,
    size = 'md',
    className = ''
}: IconProps
) {
    const LucidIcon = icons[type];
    let colorClass = '';
    if (VALID_VARIANTS.includes(color)) {
        colorClass = styles[color];
    }

    let sizeClass = '';
    let finalSize = undefined;
    if (typeof size === 'string' && VALID_SIZES.includes(size)) {
        sizeClass = styles[size];
    } else if (typeof size === 'number') {
        finalSize = size;
    }

    const finalClassName = `${colorClass} ${className} ${sizeClass} `;

    return <LucidIcon className={finalClassName} size={finalSize}/>
}