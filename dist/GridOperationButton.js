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
import { Button, Grid, styled } from "@mui/material";
var Styledbutton = styled(Button)(function (props) { return ({
    backgroundColor: "rgb(254, 241, 73, .1)",
    borderColor: props.selected ? "#fff" : "rgb(254, 241, 273, 0.5)",
}); });
export var GridOperationButton = function (_a) {
    var operation = _a.operation, selectOperation = _a.selectOperation, selectedOperation = _a.selectedOperation;
    return (_jsx(Grid, __assign({ item: true, xs: 3 }, { children: _jsx(Styledbutton, __assign({ fullWidth: true, variant: "outlined", onClick: function () { return selectOperation(operation); }, selected: selectedOperation === operation }, { children: operation })) })));
};
