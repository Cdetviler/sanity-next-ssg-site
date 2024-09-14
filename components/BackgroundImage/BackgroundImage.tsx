import { BackgroundImageProps, sizeDimensions } from "./BackgroundImage.type";
import styles from './BackgroundImage.module.css';

const DARKNESS_LEVELS = {
    none: '',
    dark: styles.backgroundDark,
    darker: styles.backgroundDarker,
    darkest: styles.backgroundDarkest
}

export default function BackgroundImage({
    children = <></>,
    className = '',
    containerWidth = 'full',
    containerHeight = 'full',
    src,
    alt,
    paralax = 'none',
    verticalPosition = 'center',
    horizontalPosition = 'center',
    backgroundOrigin = 'padding-box',
    backgroundRepeat = 'no-repeat',
    backgroundSize = 'cover',
    backgroundDarkness = 'none'
}: BackgroundImageProps
) {

    const getContainerDimension = (dimension: sizeDimensions) => {
        if (dimension === 'full') {
            return '100%';
        }
        else return dimension;
    }

    const getDarknessClass = () => {
        if (backgroundDarkness in DARKNESS_LEVELS) {
            return DARKNESS_LEVELS[`${backgroundDarkness}`];
        }
        else return '';
    }

    const style = {
        width: getContainerDimension(containerWidth),
        height: getContainerDimension(containerHeight),
        backgroundAttachment: paralax === 'none' ? 'scroll' : paralax,
        backgroundPosition: `${horizontalPosition} ${verticalPosition}`,
        backgroundOrigin,
        backgroundRepeat,
        backgroundSize,
        backgroundImage: `url(${src})`,
    }
    
    const classNames = [
        styles.background,
        getDarknessClass(),
        className
    ]

    const finalClassName = classNames.join(' ');

    return (
        <div
            role="img"
            aria-label={alt}
            style={style}
            className={finalClassName}
        >
            {children}
        </div>
    )
}