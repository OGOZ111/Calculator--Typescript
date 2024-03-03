var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Button, Grid } from "@mui/material";
export var GridDigitButton = function (_a) {
    var digit = _a.digit, enterDigit = _a.enterDigit, _b = _a.xs, xs = _b === void 0 ? 3 : _b;
    return (_jsx(Grid, __assign({ xs: xs }, { children: _jsx(Button, __assign({ fullWidth: true, variant: "outlined", onClick: function () { return enterDigit(digit); } }, { children: digit })) })));
};
