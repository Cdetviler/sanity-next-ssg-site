import { ButtonProps } from "./Button.type"
import styles from './Button.module.scss';
import { getCssSizeClass, getCssVariantClass } from "./buttonUtils";

export default function Button({
    children,
    className = '',
    color = 'primary',
    hierarchy = 'contained',
    size = 'md',
    ...buttonProps
}: ButtonProps
) {
    const finalClassName = `${styles.button} ${getCssVariantClass(color, hierarchy)} ${getCssSizeClass(size)} ${className}`;

    return (
        <button {...buttonProps} className={finalClassName}>
            {children}
        </button>
    )
}