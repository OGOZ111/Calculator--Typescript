import { useState } from "react";
import { Button, Container, Grid, Paper, styled } from "@mui/material";
import { GridDigitButton } from "./GridDigitButton";
import { GridOperationButton } from "./GridOperationButton";

// output container styles
const OutputContainer = styled(`div`)(({ theme }) => ({
  width: "100%",
  textAlign: "right",
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "3em",
  overflow: "hidden",
}));

// calculator base styles
const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
}));

function App() {
  // state variables
  const [prevValue, setPrevValue] = useState("");
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  // calculator functions
  const equals = () => {
    const val = calculate();
    setCurrentValue(`${val}`);
    setPrevValue("");
    setOperation("");
    setOverwrite(true);
  };

  const calculate = () => {
    // calculate function for basic operations using a switch.
    if (!prevValue || !operation) return currentValue;

    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevValue);

    let result;
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
    return result;
  };

  const clear = () => {
    // clear function to reset the calculator.
    setPrevValue("");
    setOperation("");
    setCurrentValue("0");
    setOverwrite(true);
  };

  const del = () => {
    // delete function to remove the last digit.
    setCurrentValue("0");
    setOverwrite(true);
  };

  const percent = () => {
    // percent function to convert the current value to a percentage.
    const curr = parseFloat(currentValue);
    setCurrentValue((curr / 100).toString());
  };

  const selectOperation = (x: string) => {
    // select operation function to set the operation and previous value.
    if (prevValue) {
      const val = calculate();
      setCurrentValue(`${val}`);
      setPrevValue(`${val}`);
    } else {
      setPrevValue(currentValue);
    }
    setOperation(x);
    setOverwrite(true);
  };

  const setDigit = (digit: string) => {
    // set digit function to set the current value, and allowe the use of only 1 decimal point.
    if (currentValue[0] === "0" && digit === "0") return;
    if (currentValue.includes(".") && digit === ".") return;

    if (overwrite && digit !== ".") {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
  };

  return (
    <>
      <Container maxWidth="sm">
        <h1>Calculator Typescript React23s</h1>
        <CalculatorBase elevation={3}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <OutputContainer data-testid="output">
                {currentValue}
              </OutputContainer>
            </Grid>
            <Grid item container columnSpacing={1}>
              <GridOperationButton
                operation={"AC"}
                selectOperation={clear}
                selectedOperation={operation}
              />
              <GridOperationButton
                operation={"C"}
                selectOperation={del}
                selectedOperation={operation}
              />
              <GridOperationButton
                operation={"%"}
                selectOperation={percent}
                selectedOperation={operation}
              />
              <GridOperationButton
                operation={"÷"}
                selectOperation={selectOperation}
                selectedOperation={operation}
              />
            </Grid>
            <Grid item container columnSpacing={1}>
              <GridDigitButton digit={"7"} enterDigit={setDigit} />
              <GridDigitButton digit={"8"} enterDigit={setDigit} />
              <GridDigitButton digit={"9"} enterDigit={setDigit} />
              <GridOperationButton
                operation={"*"}
                selectOperation={selectOperation}
                selectedOperation={operation}
              />
            </Grid>
            <Grid item container columnSpacing={1}>
              <GridDigitButton digit={"4"} enterDigit={setDigit} />
              <GridDigitButton digit={"5"} enterDigit={setDigit} />
              <GridDigitButton digit={"6"} enterDigit={setDigit} />
              <GridOperationButton
                operation={"-"}
                selectOperation={selectOperation}
                selectedOperation={operation}
              />
            </Grid>
            <Grid item container columnSpacing={1}>
              <GridDigitButton digit={"1"} enterDigit={setDigit} />
              <GridDigitButton digit={"2"} enterDigit={setDigit} />
              <GridDigitButton digit={"3"} enterDigit={setDigit} />

              <GridOperationButton
                operation={"+"}
                selectOperation={selectOperation}
                selectedOperation={operation}
              />
            </Grid>
            <Grid item container columnSpacing={1}>
              <GridDigitButton xs={6} digit={"0"} enterDigit={setDigit} />
              <GridDigitButton digit={"."} enterDigit={setDigit} />

              <Grid item xs={3}>
                <Button fullWidth variant="contained" onClick={equals}>
                  =
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CalculatorBase>
      </Container>
    </>
  );
}

export default App;
