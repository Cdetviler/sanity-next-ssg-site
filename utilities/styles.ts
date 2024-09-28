const getStyle = (validProperties: string[], styleObject: any, property: string) => {
    if (!property || !validProperties.includes(property)) {
        return '';
    }
    return styleObject[property];
}

export { getStyle };