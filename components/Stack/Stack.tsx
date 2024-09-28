import { StackProps, stackCrossDirectionalAlign, stackGap, generalMediaMap, stackDirection, stackDirectionalAlign } from "./Stack.type";
import styles from "./Stack.module.scss";

// Gap values at various breakpoints
const defaultGapValues: stackGap = {
    xs: 'md',
    sm: 'md',
    md: 'md',
    lg: 'md',
    xl: 'md'
}

const defaultDirectionalAlignValues: stackDirectionalAlign = 'flex-start';

const defaultDirectionValues: stackDirection = {
    xs: 'column',
    sm: 'column',
    md: 'row',
    lg: 'row',
    xl: 'row'
}

const defaultContainerAlignValues: stackCrossDirectionalAlign = 'flex-start';

export default function Stack({
    children,
    className = '',
    wrap = 'no-wrap',
    direction = defaultDirectionValues,
    directionalAlign = defaultDirectionalAlignValues,
    crossDirectionalAlign = 'center',
    containerAlign = defaultContainerAlignValues,
    gap = defaultGapValues,
}: StackProps
) {
    const generateClassNames = (cssProperty: string, values: generalMediaMap) => {
        if (typeof values === 'string') {
            const convertedValue = {
                xs: values,
                sm: values,
                md: values,
                lg: values,
                xl: values,
            }
            return Object.entries(convertedValue).map(entry => {
                const [size, value] = entry;
               return styles[`${size}-media-${cssProperty}-${value}`];
            })
        }
        return Object.entries(values).map(entry => {
            const [size, value] = entry;
            return styles[`${size}-media-${cssProperty}-${value}`];
        })
    }

    const generateGapClassNames = () => {
        if (typeof gap === 'string') {
            const convertedValue = {
                xs: gap,
                sm: gap,
                md: gap,
                lg: gap,
                xl: gap,
            }
            return Object.entries(convertedValue).map((size) => {
                return styles[`${size}-media-gap-${gap}`];
            })
        }
        return Object.entries(gap).map(entry => {
            const [size, value] = entry;
            return styles[`${size}-media-gap-${value}`];
        })
    }

    const getWrapClassName = () => {
        const wrapValues = {
            'wrap': 'wrap',
            'wrap-reverse': 'wrapReverse',
            'no-wrap': 'noWrap'
        };

        return wrap in wrapValues ? styles[wrapValues[wrap]] : '';
    }

    const directionalClasses = generateClassNames('flex-direction', direction);
    const directionalAlignmentClasses = generateClassNames('justify-content', directionalAlign);
    const crossDirectionalAlignmentClasses = generateClassNames('align-items', crossDirectionalAlign);
    const containerAlignmentClasses = generateClassNames('align-content', containerAlign);
    const wrapClass = getWrapClassName();
    const gapClasses = generateGapClassNames();

    const classNames = [
        styles.stack,
        className,
        wrapClass,
        ...directionalClasses,
        ...directionalAlignmentClasses,
        ...crossDirectionalAlignmentClasses,
        ...containerAlignmentClasses,
        ...gapClasses
    ];
    const finalClassName = classNames.join(' ');

    return (
        <div className={finalClassName}>
            {children}
        </div>
    )
}