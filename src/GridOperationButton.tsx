import { Button, Grid, styled } from "@mui/material";

interface GridOperationButtonProps {
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
}

const Styledbutton = styled(Button)<{ selected: boolean }>((props) => ({
  backgroundColor: "rgb(160, 216, 239, 0.1)", // Light blue background
  borderColor: props.selected ? "#fff" : "rgba(160, 216, 239, 0.5)", // Light blue border
}));

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({
  operation,
  selectOperation,
  selectedOperation,
}) => {
  return (
    <Grid item xs={3}>
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
