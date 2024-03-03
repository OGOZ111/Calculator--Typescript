import { Button, Grid, styled } from "@mui/material";

interface GridOperationButtonProps {
  // GridOperationButtonProps interface with operation, selectOperation, and selectedOperation properties for TS
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
}

const Styledbutton = styled(Button)<{ selected: boolean }>((props) => ({
  // Styledbutton component with selected property for TS
  backgroundColor: "rgb(160, 216, 239, 0.1)",
  borderColor: props.selected ? "#fff" : "rgba(160, 216, 239, 0.5)",
}));

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({
  // GridOperationButton component with operation, selectOperation, and selectedOperation properties for TS
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
