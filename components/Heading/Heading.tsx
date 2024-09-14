import React from "react";
import { HeadingProps } from "./Heading.type";
import styles from "./Heading.module.scss";

const VALID_HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const VALID_VARIANTS = ['primary', 'secondary', 'tertiary', 'neutral-dark', 'neutral-light'];

export default function Heading({
    children,
    className = '',
    color = 'primary',
    tag = 'h1',
    spacing = true
}: HeadingProps
) {
    let headingLevelStyles = '';
    if (VALID_HEADINGS.includes(tag)) {
        headingLevelStyles = styles[tag];
    }

    let variantStyles = '';
    if (VALID_VARIANTS.includes(color)) {
        variantStyles = styles[color];
    }

    let spacingStyles = '';
    if (!spacing) {
        spacingStyles = styles.noSpacing;
    }

    const finalClassName = `${styles.heading} ${headingLevelStyles} ${variantStyles} ${spacingStyles} ${className}`;
    const props = {
        className: finalClassName
    }
    return React.createElement(tag, props, children);
}