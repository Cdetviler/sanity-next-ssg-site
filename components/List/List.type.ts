import { ReactNode } from "react"

type listType = 'ordered' | 'unordered' | 'ol' | 'ul';
type listColor = 'primary' | 'secondary' | 'tertiary' | 'neutral-light' | 'neutral-dark' | 'inherit';

interface ListProps {
    listType?: listType;
    children: ReactNode;
    className?: string;
    color?: listColor;
}

export type { ListProps, listType, listColor };