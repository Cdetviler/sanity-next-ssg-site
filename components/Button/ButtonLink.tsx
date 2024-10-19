import { getCssSizeClass, getCssVariantClass } from "./buttonUtils";
import styles from './Button.module.scss';
import { ButtonLinkProps } from "./ButtonLink.type";
import Link from "next/link";

export default function ButtonLink({
    children,
    className = '',
    color = 'primary',
    hierarchy = 'contained',
    size = 'md',
    external = false,
    href,
    ...buttonLinkProps
}: ButtonLinkProps
) {
    const finalClassName = `${styles.button} ${getCssVariantClass(color, hierarchy)} ${getCssSizeClass(size)} ${className}`;

    if (external) {
        return (
            <a  {...buttonLinkProps} href={typeof href === 'string' ? href : undefined} className={finalClassName}>
                {children}
            </a>
        )
    }

    return (
        <Link href={href} {...buttonLinkProps} className={finalClassName}>
            {children}
        </Link>
    )

}