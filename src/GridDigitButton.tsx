import { Button, Grid } from "@mui/material";

interface GridDigitButtonProps {
  // GridDigitButtonProps interface with digit and enterDigit properties for TS
  digit: string;
  enterDigit: (digit: string) => void;
  xs?: number;
}

export const GridDigitButton: React.FC<GridDigitButtonProps> = ({
  // GridDigitButton component with digit and enterDigit properties for TS
  digit,
  enterDigit,
  xs = 3,
}) => {
  return (
    // Button component with digit and enterDigit properties for TS
    <Grid item xs={xs}>
      <Button fullWidth variant="outlined" onClick={() => enterDigit(digit)}>
        {digit}
      </Button>
    </Grid>
  );
};
