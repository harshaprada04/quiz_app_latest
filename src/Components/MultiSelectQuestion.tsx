import { FormControlLabel, FormGroup, Typography } from "@mui/material";
import CardToShowQuestion from "./CardToShowQuestion";
import Checkbox from "@mui/material/Checkbox";

function MultiSelectQuestion(props: any) {
  return (
    <div>
      <CardToShowQuestion MultiSelectQuestion={MultiSelectQuestion}>
        <Typography data-testid="heading">
          {props.questionDetails.question}
        </Typography>
        {props.questionDetails.option.map((data: [], index: number) => {
          return (
            <div key={`msq-div-${index}`}>
              <FormGroup>
                <FormControlLabel
                 data-testid= {`msq-${index}`}
                  control={
                    <Checkbox onChange={() => props.changeHandler(data)} />
                  }
                  label={data}
                />
              </FormGroup>
            </div>
          );
        })}
      </CardToShowQuestion>
    </div>
  );
}

export default MultiSelectQuestion;
