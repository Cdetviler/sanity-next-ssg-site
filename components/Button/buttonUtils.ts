import { BUTTON_SIZES, BUTTON_VARIANTS } from "./buttonConstants";
import { buttonColor, buttonHierarchy, buttonSize } from "./Button.type"

const getCssVariantClass = (color: buttonColor, hierarchy: buttonHierarchy) => {
    if (color in BUTTON_VARIANTS && hierarchy in BUTTON_VARIANTS[color]) {
        return BUTTON_VARIANTS[color][hierarchy];
    }
    return BUTTON_VARIANTS.primary.contained;
}

const getCssSizeClass = (size: buttonSize) => {
    if (size in BUTTON_SIZES) {
        return BUTTON_SIZES[size];
    }
    return BUTTON_SIZES.md;
}

export { getCssSizeClass, getCssVariantClass };