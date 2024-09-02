import { MouseEventHandler, ReactNode } from "react"

type buttonColor = 'primary' | 'secondary' | 'tertiary';
type buttonSize = 'sm' | 'md' | 'lg';
type buttonHierarchy = 'contained' | 'outlined' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    color?: buttonColor;
    hierarchy?: buttonHierarchy;
    size?: buttonSize;
} 

export type { ButtonProps, buttonColor, buttonSize, buttonHierarchy };