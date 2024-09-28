import React from "react";
import { icons } from "lucide-react";
import { IconProps } from "./Icon.type";
import styles from "./Icon.module.scss";
import { getStyle } from "@/utilities/styles";

const VALID_VARIANTS = ['primary', 'secondary', 'tertiary', 'neutral-dark', 'neutral-light', 'inherit'];
const VALID_SIZES = ['xs', 'sm', 'md', 'lg', 'xl', 'none'];

export default function Icon({
    color = 'inherit',
    type,
    size = 'none',
    className = ''
}: IconProps
) {
    const LucidIcon = icons[type];
    const colorClass = getStyle(VALID_VARIANTS, styles, color);

    let sizeClass = '';
    let finalSize = undefined;
    if (typeof size === 'string' && VALID_SIZES.includes(size)) {
        if (size === 'none') {
            sizeClass = styles.sizeNone;
        }
        sizeClass = styles[size];
    } else if (typeof size === 'number') {
        finalSize = size;
    }

    const finalClassName = `${colorClass} ${className} ${sizeClass} `;

    return <LucidIcon className={finalClassName} size={finalSize}/>
}