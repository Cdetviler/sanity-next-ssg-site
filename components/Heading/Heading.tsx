import React from "react";
import { HeadingProps } from "./Heading.type";
import styles from "./Heading.module.scss";
import { getStyle } from "@/utilities/styles";

const VALID_HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const VALID_VARIANTS = ['primary', 'secondary', 'tertiary', 'neutral-dark', 'neutral-light'];
const VALID_ALIGNMENTS = ['left', 'right', 'center'];

export default function Heading({
    children,
    className = '',
    color = 'primary',
    tag = 'h1',
    spacing = true,
    textAlign = 'left'
}: HeadingProps
) {
    const headingLevelStyles = getStyle(VALID_HEADINGS, styles, tag);
    const variantStyles = getStyle(VALID_VARIANTS, styles, color);
    const alignmentStyles = getStyle(VALID_ALIGNMENTS, styles, textAlign);
    let spacingStyles = '';
    if (!spacing) {
        spacingStyles = styles.noSpacing;
    }

    const finalClassName = `${styles.heading} ${headingLevelStyles} ${alignmentStyles} ${variantStyles} ${spacingStyles} ${className}`;
    const props = {
        className: finalClassName
    }
    return React.createElement(tag, props, children);
}