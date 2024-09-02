import { boxColor, boxHierarchy, BoxProps } from "./Box.type";
import styles from './Box.module.css';

const BOX_VARIANTS = {
    primary: {
        contained: styles.primaryContained,
        outlined: styles.primaryOutline,
        ghost: styles.primaryGhost,
    },
    secondary: {
        contained: styles.secondaryContained,
        outlined: styles.secondaryOutline,
        ghost: styles.secondaryGhost,
    },
    tertiary: {
        contained: styles.tertiaryContained,
        outlined: styles.tertiaryOutline,
        ghost: styles.tertiaryGhost,
    },
    neutral: {
        contained: styles.neutralContained,
        outlined: styles.neutralOutline,
        ghost: styles.neutralGhost,
    }
}

const BOX_HEIGHTS = {
    xs: styles.heightXs,
    sm: styles.heightSm,
    md: styles.heightMd,
    lg: styles.heightLg,
    xl: styles.heightXl,
    full: styles.heightFull,
    auto: styles.heightAuto,
}

const BOX_WIDTHS = {
    xs: styles.widthXs,
    sm: styles.widthSm,
    md: styles.widthMd,
    lg: styles.widthLg,
    xl: styles.widthXl,
    full: styles.widthFull,
    auto: styles.widthAuto,
}

const BOX_PADDING = {
    none: styles.paddingNone,
    xs: styles.paddingXs,
    sm: styles.paddingSm,
    md: styles.paddingMd,
    lg: styles.paddingLg,
    xl: styles.paddingXl
}

const BOX_MARGIN = {
    none: styles.marginNone,
    xs: styles.marginXs,
    sm: styles.marginSm,
    md: styles.marginMd,
    lg: styles.marginLg,
    xl: styles.marginXl,
    auto: styles.marginAuto,
}

const BOX_ROUNDING = {
    square: styles.boxRoundSquare,
    rounded: styles.boxRoundingRounded,
    circle: styles.boxRoundingCircle
}

export default function Box({
    children,
    className = '',
    color = 'primary',
    hierarchy = 'contained',
    width = 'full',
    height = 'auto',
    padding = 'none',
    margin = 'none',
    rounding = 'rounded'
}: BoxProps
) {
    const getCssVariantClass = () => {
        if (color in BOX_VARIANTS && hierarchy in BOX_VARIANTS[color]) {
            return BOX_VARIANTS[color][hierarchy];
        }
        return BOX_VARIANTS.primary.contained;
    }

    const getPaddingClass = () => {
        return BOX_PADDING[padding];
    }

    const getMarginClass = () => {
        return BOX_MARGIN[margin];
    }

    const getCssWidthClass = () => {
        if (!width) {
            return 
        }
        return BOX_WIDTHS[width];
    }

    const getCssHeightClass = () => {
        if (!height) {
            return BOX_HEIGHTS.auto;
        }
        return BOX_HEIGHTS[height];
    }

    const getRoundingClass = () => {
        if (!rounding) {
            BOX_ROUNDING[rounding];
        }
        return BOX_ROUNDING[rounding];
    }

    const classNames = [
        styles.box,
        getCssVariantClass(),
        getPaddingClass(),
        getMarginClass(),
        getCssHeightClass(),
        getCssWidthClass(),
        getRoundingClass(),
        className
    ]

    const finalClassName = classNames.join(' ');
    
    return (
        <div className={finalClassName}>
            {children}
        </div>
    )
}