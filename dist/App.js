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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button, Container, Grid, Paper, styled } from "@mui/material";
import { GridDigitButton } from "./GridDigitButton";
import { GridOperationButton } from "./GridOperationButton";
var OutputContainer = styled("div")(function (_a) {
    var theme = _a.theme;
    return ({
        width: "100%",
        textAlign: "right",
        height: "2em",
        padding: theme.spacing(2),
        fontSize: "3em",
        overflow: "hidden",
    });
});
var CalculatorBase = styled(Paper)(function (_a) {
    var theme = _a.theme;
    return ({
        padding: theme.spacing(2),
        marginTop: theme.spacing(4),
        borderRadius: 15,
    });
});
function App() {
    var _a = useState(""), prevValue = _a[0], setPrevValue = _a[1];
    var _b = useState("0"), currentValue = _b[0], setCurrentValue = _b[1];
    var _c = useState(""), operation = _c[0], setOperation = _c[1];
    var _d = useState(true), overwrite = _d[0], setOverwrite = _d[1];
    var equals = function () {
        var val = calculate();
        setCurrentValue("".concat(val));
        setPrevValue("");
        setOperation("");
        setOverwrite(true);
    };
    var calculate = function () {
        if (!prevValue || !operation)
            return currentValue;
        var curr = parseFloat(currentValue);
        var prev = parseFloat(prevValue);
        console.log("curr", curr);
        console.log("prev", prev);
        var result;
        switch (operation) {
            case "÷":
                result = prev / curr;
                break;
            case "*":
                result = prev * curr;
                break;
            case "-":
                result = prev - curr;
                break;
            case "+":
                result = prev + curr;
                break;
        }
        console.log("result", result);
        return result;
    };
    var clear = function () {
        setPrevValue("");
        setOperation("");
        setCurrentValue("0");
        setOverwrite(true);
    };
    var del = function () {
        setCurrentValue("0");
        setOverwrite(true);
    };
    var percent = function () {
        var curr = parseFloat(currentValue);
        setCurrentValue((curr / 100).toString());
    };
    var selectOperation = function (x) {
        if (prevValue) {
            var val = calculate();
            setCurrentValue("".concat(val));
            setPrevValue("".concat(val));
        }
        else {
            setPrevValue(currentValue);
        }
        setOperation(x);
        setOverwrite(true);
    };
    var setDigit = function (digit) {
        if (currentValue[0] === "0" && digit === "0")
            return;
        if (currentValue.includes(".") && digit === ".")
            return;
        if (overwrite && digit !== ".") {
            setCurrentValue(digit);
        }
        else {
            setCurrentValue("".concat(currentValue).concat(digit));
        }
        setOverwrite(false);
    };
    return (_jsx(Container, __assign({ maxWidth: "sm" }, { children: _jsx(CalculatorBase, __assign({ elevation: 3 }, { children: _jsxs(Grid, __assign({ container: true, spacing: 1 }, { children: [_jsx(Grid, __assign({ item: true, xs: 12 }, { children: _jsx(OutputContainer, __assign({ "data-testid": "output" }, { children: currentValue })) })), _jsxs(Grid, __assign({ item: true, container: true, columnSpacing: 1 }, { children: [_jsx(GridOperationButton, { operation: "AC", selectOperation: clear, selectedOperation: operation }), _jsx(GridOperationButton, { operation: "C", selectOperation: del, selectedOperation: operation }), _jsx(GridOperationButton, { operation: "%", selectOperation: percent, selectedOperation: operation }), _jsx(GridOperationButton, { operation: "÷", selectOperation: selectOperation, selectedOperation: operation })] })), _jsxs(Grid, __assign({ item: true, container: true, columnSpacing: 1 }, { children: [_jsx(GridDigitButton, { digit: "7", enterDigit: setDigit }), _jsx(GridDigitButton, { digit: "8", enterDigit: setDigit }), _jsx(GridDigitButton, { digit: "9", enterDigit: setDigit }), _jsx(GridOperationButton, { operation: "*", selectOperation: selectOperation, selectedOperation: operation })] })), _jsxs(Grid, __assign({ item: true, container: true, columnSpacing: 1 }, { children: [_jsx(GridDigitButton, { digit: "4", enterDigit: setDigit }), _jsx(GridDigitButton, { digit: "5", enterDigit: setDigit }), _jsx(GridDigitButton, { digit: "6", enterDigit: setDigit }), _jsx(GridOperationButton, { operation: "-", selectOperation: selectOperation, selectedOperation: operation })] })), _jsxs(Grid, __assign({ item: true, container: true, columnSpacing: 1 }, { children: [_jsx(GridDigitButton, { digit: "1", enterDigit: setDigit }), _jsx(GridDigitButton, { digit: "2", enterDigit: setDigit }), _jsx(GridDigitButton, { digit: "3", enterDigit: setDigit }), _jsx(GridOperationButton, { operation: "+", selectOperation: selectOperation, selectedOperation: operation })] })), _jsxs(Grid, __assign({ item: true, container: true, columnSpacing: 1 }, { children: [_jsx(GridDigitButton, { xs: 6, digit: "0", enterDigit: setDigit }), _jsx(GridDigitButton, { digit: ".", enterDigit: setDigit }), _jsx(Grid, __assign({ item: true, xs: 3 }, { children: _jsx(Button, __assign({ fullWidth: true, variant: "contained", onClick: equals }, { children: "=" })) }))] }))] })) })) })));
}
export default App;
