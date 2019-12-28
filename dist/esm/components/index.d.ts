import React, { Component } from 'react';
import { DrawerProps, DrawerWidth } from './types';
export declare class DrawerBase extends Component<DrawerProps, {
    renderPortal: boolean;
}> {
    static defaultProps: {
        width: DrawerWidth;
        isFocusLockEnabled: boolean;
        shouldReturnFocus: boolean;
        autoFocusFirstElem: boolean;
    };
    state: {
        renderPortal: boolean;
    };
    body: HTMLBodyElement | null | undefined;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: DrawerProps): void;
    private handleBlanketClick;
    private handleBackButtonClick;
    private handleClose;
    handleKeyDown: (event: KeyboardEvent) => void;
    render(): JSX.Element | null;
}
export declare const DrawerItemTheme: (props: {
    children: React.ReactNode;
}) => JSX.Element;
export * from './skeletons';
export * from './item-group';
export * from './item';
declare const _default: any;
export default _default;
