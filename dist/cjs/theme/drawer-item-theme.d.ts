declare const _default: {
    [x: number]: {
        padding: {
            compact: {
                bottom: number;
                left: number;
                right: number;
                top: number;
            };
            default: {
                bottom: number;
                left: number;
                right: number;
                top: number;
            };
        };
        borderRadius: number;
        height: {
            compact: number;
            default: number;
        };
        beforeItemSpacing: {
            compact: number;
            default: number;
        };
        default: {
            background: import("./types").Color;
            text: import("./types").Color;
            secondaryText: import("./types").Color;
        };
        hover: {
            background: import("./types").Color;
            text: import("./types").Color;
            secondaryText: import("./types").Color;
        };
        active: {
            background: import("./types").Color;
            text: import("./types").Color;
            secondaryText: import("./types").Color;
        };
        selected: {
            background: import("./types").Color;
            text: import("./types").Color;
            secondaryText: import("./types").Color;
        };
        focus: {
            outline: string | Function | undefined;
        };
        dragging: {
            background: import("./types").Color;
        };
    };
};
export default _default;
