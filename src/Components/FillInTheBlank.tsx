import { FormControl, TextField, Typography } from "@mui/material";
import CardToShowQuestion from "./CardToShowQuestion";

function FiilInTheBlankQuestion(props: any) {
  return (
    <div>
      <CardToShowQuestion FiilInTheBlankQuestion={FiilInTheBlankQuestion}>
        <div style={{ display: "inline" }}>
          <Typography data-testid="heading" style={{ display: "inline" }}>
            {props.questionDetails.question}
          </Typography>
          <FormControl style={{ display: "inline", paddingLeft:"10px",height:"10px" }}>
            <TextField
            inputProps={{"data-testid":"fill-ans"}}
              style={{ height:10}}
              autoComplete="off"
              autoSave="off"
              size="small"
              id="outlined-basic"
              variant="outlined"
              value={props.submittedAnswer}
              onChange={props.changeHandler}
            ></TextField>
          </FormControl>
        </div>
      </CardToShowQuestion>
    </div>
  );
}

export default FiilInTheBlankQuestion;
