import { ButtonProps, buttonColor, buttonHierarchy, buttonSize } from "./Button.type"
import styles from './Button.module.css';

const BUTTON_VARIANTS = {
    primary: {
        contained: styles.primary,
        outlined: styles.primaryOutline,
        ghost: styles.primaryGhost,
    },
    secondary: {
        contained: styles.secondary,
        outlined: styles.secondaryOutline,
        ghost: styles.secondaryGhost,
    },
    tertiary: {
        contained: styles.tertiary,
        outlined: styles.tertiaryOutline,
        ghost: styles.tertiaryGhost,
    }
}

const BUTTON_SIZES = {
    sm: styles.small,
    md: styles.medium,
    lg: styles.large
}

export default function Button({
    children,
    className = '',
    color = 'primary',
    hierarchy = 'contained',
    size = 'md',
    ...buttonProps
}: ButtonProps
) {
    const getCssVariantClass = (color: buttonColor, hierarchy: buttonHierarchy) => {
        if (color in BUTTON_VARIANTS && hierarchy in BUTTON_VARIANTS[color]) {
            return BUTTON_VARIANTS[color][hierarchy];
        }
        return BUTTON_VARIANTS.primary.contained;
    }

    const getCssSizeClass = (size: buttonSize) => {
        if (size in BUTTON_SIZES) {
            return BUTTON_SIZES[size];
        }
        return BUTTON_SIZES.md;
    }

    const finalClassName = `${styles.button} ${getCssVariantClass(color, hierarchy)} ${getCssSizeClass(size)} ${className}`;

    return (
        <button {...buttonProps} className={finalClassName}>
            {children}
        </button>
    )
}