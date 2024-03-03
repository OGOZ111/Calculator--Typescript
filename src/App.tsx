import { Paper, styled, Container, Grid, Button } from "@mui/material";
import React, { useState } from "react";
import { GridOperationButton } from "./GridOperationButton";
import { GridDigitButton } from "./GridDigitButton";

const OutputContainer = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "right",
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "3em",
  overflow: "hidden",
}));

const CalcualatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
}));

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");

  const selectOpperation = (operation: string) => {
    setOperation(operation);
  };

  const setDigit = (digit: string) => {
    setCurrentValue(digit);
  };
  return (
    <Container maxWidth="sm">
      <CalcualatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <OutputContainer>{currentValue}</OutputContainer>
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridOperationButton
              operation="AC"
              selectOperation={selectOpperation}
              selectedOperation={operation}
            />
            <GridOperationButton
              operation="C"
              selectOperation={selectOpperation}
              selectedOperation={operation}
            />
            <GridOperationButton
              operation="%"
              selectOperation={selectOpperation}
              selectedOperation={operation}
            />
            <GridOperationButton
              operation="÷"
              selectOperation={selectOpperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit="7" enterDigit={setDigit} />
            <GridDigitButton digit="8" enterDigit={setDigit} />
            <GridDigitButton digit="9" enterDigit={setDigit} />
            <GridOperationButton
              operation="*"
              selectOperation={selectOpperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit="4" enterDigit={setDigit} />
            <GridDigitButton digit="5" enterDigit={setDigit} />
            <GridDigitButton digit="6" enterDigit={setDigit} />
            <GridOperationButton
              operation="-"
              selectOperation={selectOpperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit="1" enterDigit={setDigit} />
            <GridDigitButton digit="2" enterDigit={setDigit} />
            <GridDigitButton digit="3" enterDigit={setDigit} />
            <GridOperationButton
              operation="+"
              selectOperation={selectOpperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit="0" enterDigit={setDigit} xs={6} />
            <GridDigitButton digit="." enterDigit={setDigit} />
            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                =
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CalcualatorBase>
    </Container>
  );
}

export default App;
