import { Button, Grid, styled } from "@mui/material";

interface GridOperationButtonProps {
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
}

const Styledbutton = styled(Button)<{ selected: boolean }>((props) => ({
  backgroundColor: "rgb(254, 241, 73, .1)",
  borderColor: props.selected ? "#fff" : "rgb(254, 241, 273, 0.5)",
}));

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({
  operation,
  selectOperation,
  selectedOperation,
}) => {
  return (
    <Grid item>
      <Styledbutton
        fullWidth
        variant="outlined"
        onClick={() => selectOperation(operation)}
        selected={selectedOperation === operation}
      >
        {operation}
      </Styledbutton>
    </Grid>
  );
};
