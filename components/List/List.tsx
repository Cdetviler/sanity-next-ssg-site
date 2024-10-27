import React from 'react';
import styles from './List.module.scss';
import { listColor as listColors, ListProps, listType as listTypes } from "./List.type";

const LIST_TYPES = {
    ul: 'ul',
    ol: 'ol',
    ordered: 'ol',
    unordered: 'ul'
};

const LIST_COLORS = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
    'neutral-light': styles['neutral-light'],
    'neutral-dark': styles['neutral-dark'],
    'inherit': ''
}

const getListColor = (listColor: listColors) => {
    if (listColor in LIST_COLORS) {
        return LIST_COLORS[listColor];
    }
    return '';
}

const getListType = (listType: listTypes) => {
    if (listType in LIST_TYPES) {
        return LIST_TYPES[listType];
    }
    return LIST_TYPES.unordered;
}

export default function List({
    children,
    className = '',
    listType = 'ul',
    color = 'primary'
}: ListProps
) {
    const tag = getListType(listType);
    const listColorClass = getListColor(color);

    const finalClassName = `${styles.list} ${listColorClass} ${className}`;

    const props = {
        className: finalClassName
    }

    return React.createElement(tag, props, children);
}