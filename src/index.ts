import Pallete from "./Pallete";

export const pSize = {
    "Full": UDim2.fromScale(1.0, 1.0),
    "Half": UDim2.fromScale(0.5, 0.5),
    "None": UDim2.fromScale(0.0, 0.0)
};

export const pAnchor = {
    "Left": {
        "Top":        Vector2.zero,
        "Center": new Vector2(0.0, 0.5),
        "Bottom":     Vector2.yAxis
    },
    "Center": {
        "Top":    new Vector2(0.5, 0.0),
        "Center": new Vector2(0.5, 0.5),
        "Bottom": new Vector2(0.5, 1.0)
    },
    "Right": {
        "Top":        Vector2.xAxis,
        "Center": new Vector2(1.0, 0.5),
        "Bottom":     Vector2.one
    }
};

export const pPoint = {
    "Left": {
        "Top":    UDim2.fromScale(0.0, 0.0),
        "Center": UDim2.fromScale(0.0, 0.5),
        "Bottom": UDim2.fromScale(0.0, 1.0)
    },
    "Center": {
        "Top":    UDim2.fromScale(0.5, 0.0),
        "Center": UDim2.fromScale(0.5, 0.5),
        "Bottom": UDim2.fromScale(0.5, 1.0)
    },
    "Right": {
        "Top":    UDim2.fromScale(1.0, 0.0),
        "Center": UDim2.fromScale(1.0, 0.5),
        "Bottom": UDim2.fromScale(1.0, 1.0)
    }
};

/**
 * @description A large precomputed color pallete created for Tailwind CSS.
 * @link https://tailwindcss.com/docs/customizing-colors
 */
export const pColor = Pallete;