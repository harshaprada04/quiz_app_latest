import CardToShowQuestion from "./CardToShowQuestion";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";

function MultipleChoiceQuestion(props: any) {
  return (
    <div>
      <CardToShowQuestion MultipleChoiceQuestion={MultipleChoiceQuestion}>
        <Typography data-testid= "heading">{props.questionDetails.question}</Typography> 
        <FormControl>
          {props.questionDetails.option.map((data: [],index:number) => {
            return (
              <div key ={`main-${index}`} >
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  value={data}
                  name="radio-buttons-group"
                  data-testid={`mcq-${index}`}
                >
                  <FormControlLabel
                    value={data}
                    control={<Radio />}
                    label={data}
                    checked={data === props.submittedAnswer}
                    onChange={props.clickHandler}
                  />
                </RadioGroup>
              </div>
            );
          })}
        </FormControl>
      </CardToShowQuestion>
    </div>
  );
}

export default MultipleChoiceQuestion;
