import React from "react";
import { TextContentProps } from "./TextContent.type";
import styles from "./TextContent.module.scss";
import { getStyle } from "@/utilities/styles";

const VALID_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];
const VALID_VARIANTS = ['primary', 'secondary', 'tertiary', 'neutral-dark', 'neutral-light'];
const VALID_ALIGNMENTS = ['left', 'right', 'center'];

export default function TextContent({
    children,
    className = '',
    color = 'primary',
    isInline = false,
    textAlign = 'left',
    size = 'md'
}: TextContentProps
) {
    const variantStyles = getStyle(VALID_VARIANTS, styles, color);
    const alignmentStyles = getStyle(VALID_ALIGNMENTS, styles, textAlign);
    const sizeStyles = getStyle(VALID_SIZES, styles, size);
    const tag = isInline ? 'span' : 'p';
    const finalClassName = `${styles.textContent} ${alignmentStyles} ${variantStyles} ${sizeStyles} ${className}`;

    const props = {
        className: finalClassName
    }
    return React.createElement(tag, props, children);
}