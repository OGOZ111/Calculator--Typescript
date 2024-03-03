import { Paper, styled, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { GridOperationButton } from "./GridOperationButton";

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
          <Grid item columnSpacing={1}>
            <GridOperationButton
              operation="AC"
              selectOperation={selectOpperation}
              selectedOperation={operation}
            />
          </Grid>
        </Grid>
      </CalcualatorBase>
    </Container>
  );
}

export default App;
