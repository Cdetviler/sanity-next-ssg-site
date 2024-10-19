import styles from './Button.module.scss';

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

export { BUTTON_SIZES, BUTTON_VARIANTS };