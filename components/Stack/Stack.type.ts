import { ReactNode } from "react"

type stackDirectionSingle = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type stackDirectionMultiple = {
    xs: stackDirectionSingle;
    sm: stackDirectionSingle;
    md: stackDirectionSingle;
    lg: stackDirectionSingle;
    xl: stackDirectionSingle;
}
type stackDirection = stackDirectionSingle | stackDirectionMultiple;

type directionalAlignSingle = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type stackDirectionAlignMultiple = {
    xs: directionalAlignSingle;
    sm: directionalAlignSingle;
    md: directionalAlignSingle;
    lg: directionalAlignSingle;
    xl: directionalAlignSingle;
}
type stackDirectionalAlign = directionalAlignSingle | stackDirectionAlignMultiple;

type crossDirectionalAlignSingle = 'stretch' | 'flex-start' | 'flex-end' | 'center';
type stackCrossDirectionalAlignMutliple = {
    xs: crossDirectionalAlignSingle;
    sm: crossDirectionalAlignSingle;
    md: crossDirectionalAlignSingle;
    lg: crossDirectionalAlignSingle;
    xl: crossDirectionalAlignSingle;
}
type stackCrossDirectionalAlign = crossDirectionalAlignSingle | stackCrossDirectionalAlignMutliple;

type containerAlignSingle = 'normal' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
type containerAlignMultiple = {
    xs: containerAlignSingle;
    sm: containerAlignSingle;
    md: containerAlignSingle;
    lg: containerAlignSingle;
    xl: containerAlignSingle;
}
type stackContainerAlign = containerAlignSingle | containerAlignMultiple;

type generalMediaMap = stackContainerAlign | stackCrossDirectionalAlign | stackDirectionalAlign | stackDirection;

type stackGapSingle = 'none' | 'sm' | 'md' | 'lg' | 'xl';
type stackGapMultiple = {
    xs: stackGapSingle;
    sm: stackGapSingle;
    md: stackGapSingle;
    lg: stackGapSingle;
    xl: stackGapSingle;
}
type stackGap = stackGapSingle | stackGapMultiple;
type stackWrap = 'wrap' | 'no-wrap' | 'wrap-reverse';
/**
 * options
 * 1. use scss to generate all the classes for all the different sizes
 *  problem: lots of bloated classes that essentially end up being inline styles
 * 2. use inline styles
 *  problem: inline styles
 * 3. use utility classes
 *  problem: goes against the patterns that I've used thus far and still requires a bunch of classes
 * 4. use React hook as media query
 *  problem: duplicates media query logic and adds unncessary renders
 */

interface StackProps {
    children: ReactNode;
    className?: String;
    wrap?: stackWrap;
    direction?: stackDirection;
    directionalAlign?: stackDirectionalAlign;
    crossDirectionalAlign?: stackCrossDirectionalAlign;
    containerAlign?: stackContainerAlign;
    gap?: stackGap;
}

export type {
    StackProps,
    stackDirection,
    stackDirectionalAlign,
    stackCrossDirectionalAlign,
    stackContainerAlign,
    stackGap,
    generalMediaMap
}

