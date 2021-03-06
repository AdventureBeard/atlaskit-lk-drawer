import { __extends } from "tslib";
import React, { Children, Component, Fragment, } from 'react';
import { canUseDOM } from 'exenv';
import Portal from '@atlaskit/portal';
import { ThemeProvider } from 'styled-components';
import { TransitionGroup, Transition } from 'react-transition-group';
import { createAndFireEvent, withAnalyticsEvents, withAnalyticsContext, } from '@atlaskit/analytics-next';
import Blanket from '@adventurebeard/atlaskit-lk-blanket';
import { name as packageName, version as packageVersion, } from '../version.json';
import drawerItemTheme from '../theme/drawer-item-theme';
import FocusLock from './focus-lock';
import DrawerPrimitive from './primitives';
import { Fade } from './transitions';
var OnlyChild = function (_a) {
    var children = _a.children;
    return Children.toArray(children)[0] || null;
};
var createAndFireEventOnAtlaskit = createAndFireEvent('atlaskit');
var createAndFireOnClick = function (createAnalyticsEvent, trigger) {
    return createAndFireEventOnAtlaskit({
        action: 'dismissed',
        actionSubject: 'drawer',
        attributes: {
            componentName: 'drawer',
            packageName: packageName,
            packageVersion: packageVersion,
            trigger: trigger,
        },
    })(createAnalyticsEvent);
};
var DrawerBase = /** @class */ (function (_super) {
    __extends(DrawerBase, _super);
    function DrawerBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            renderPortal: false,
        };
        _this.body = canUseDOM ? document.querySelector('body') : undefined;
        _this.handleBlanketClick = function (event) {
            _this.handleClose(event, 'blanket');
        };
        _this.handleBackButtonClick = function (event) {
            _this.handleClose(event, 'backButton');
        };
        _this.handleClose = function (event, trigger) {
            var _a = _this.props, createAnalyticsEvent = _a.createAnalyticsEvent, onClose = _a.onClose;
            var analyticsEvent = createAnalyticsEvent &&
                createAndFireOnClick(createAnalyticsEvent, trigger);
            if (onClose) {
                onClose(event, analyticsEvent);
            }
        };
        _this.handleKeyDown = function (event) {
            var _a = _this.props, isOpen = _a.isOpen, onKeyDown = _a.onKeyDown;
            if (event.key === 'Escape' && isOpen) {
                _this.handleClose(event, 'escKey');
            }
            if (onKeyDown) {
                onKeyDown(event);
            }
        };
        return _this;
    }
    DrawerBase.prototype.componentDidMount = function () {
        var isOpen = this.props.isOpen;
        if (isOpen) {
            window.addEventListener('keydown', this.handleKeyDown);
        }
    };
    DrawerBase.prototype.componentWillUnmount = function () {
        window.removeEventListener('keydown', this.handleKeyDown);
    };
    DrawerBase.prototype.componentDidUpdate = function (prevProps) {
        var isOpen = this.props.isOpen;
        if (isOpen !== prevProps.isOpen) {
            if (isOpen) {
                window.addEventListener('keydown', this.handleKeyDown);
            }
            else {
                window.removeEventListener('keydown', this.handleKeyDown);
            }
        }
    };
    DrawerBase.prototype.render = function () {
        if (!this.body) {
            return null;
        }
        var _a = this.props, isOpen = _a.isOpen, children = _a.children, icon = _a.icon, width = _a.width, shouldUnmountOnExit = _a.shouldUnmountOnExit, onCloseComplete = _a.onCloseComplete, autoFocusFirstElem = _a.autoFocusFirstElem, isFocusLockEnabled = _a.isFocusLockEnabled, shouldReturnFocus = _a.shouldReturnFocus;
        return (React.createElement(Transition, { in: isOpen, timeout: { enter: 0, exit: 220 }, mountOnEnter: true, unmountOnExit: true },
            React.createElement(Portal, { zIndex: "unset" },
                React.createElement(TransitionGroup, { component: OnlyChild },
                    React.createElement(Fragment, null,
                        React.createElement(Fade, { in: isOpen },
                            React.createElement(Blanket, { isTinted: true, onBlanketClicked: this.handleBlanketClick })),
                        React.createElement(FocusLock, { autoFocusFirstElem: autoFocusFirstElem, isFocusLockEnabled: isFocusLockEnabled, shouldReturnFocus: shouldReturnFocus },
                            React.createElement(DrawerPrimitive, { icon: icon, in: isOpen, onClose: this.handleBackButtonClick, onCloseComplete: onCloseComplete, width: width, shouldUnmountOnExit: shouldUnmountOnExit }, children)))))));
    };
    DrawerBase.defaultProps = {
        width: 'narrow',
        isFocusLockEnabled: true,
        shouldReturnFocus: true,
        autoFocusFirstElem: false,
    };
    return DrawerBase;
}(Component));
export { DrawerBase };
export var DrawerItemTheme = function (props) { return (React.createElement(ThemeProvider, { theme: drawerItemTheme }, props.children)); };
export * from './skeletons';
export * from './item-group';
export * from './item';
export default withAnalyticsContext({
    componentName: 'drawer',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents()(DrawerBase));
//# sourceMappingURL=index.js.map