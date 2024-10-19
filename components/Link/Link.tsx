import styles from './Link.module.scss';
import { LinkProps, linkVariant } from "./Link.type";
import NextLink from "next/link";

const getCssVariantClass = (variant: linkVariant) => {
    if (variant in styles) {
        return styles[variant];
    }

    return 'dark';
}

export default function Link({
    children,
    href,
    className = '',
    variant = 'dark',
    external = false,
    ...linkProps
}: LinkProps
) {
    const finalClassName = `${styles.link} ${getCssVariantClass(variant)} ${className}`;

    if (external) {
        return (
            <a  {...linkProps} href={typeof href === 'string' ? href : undefined} className={finalClassName}>
                {children}
            </a>
        )
    }

    return (
        <NextLink href={href} {...linkProps} className={finalClassName}>
            {children}
        </NextLink>
    );
}