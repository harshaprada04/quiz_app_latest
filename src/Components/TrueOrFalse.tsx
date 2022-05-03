import { FormControl, Typography,FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio, } from "@mui/material";
import CardToShowQuestion from "./CardToShowQuestion";

function TrueOrFalseQuestion(props: any) {
  return (
    <div>
      <CardToShowQuestion TrueOrFalseQuestion={TrueOrFalseQuestion}>
       <Typography data-testid= "heading">{props.questionDetails.question}</Typography> 
        <FormControl>
          {props.questionDetails.option.map((data: [],index:number) => (
           <div key = {`div_tfq-${index}`}>
             <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  name="radio-buttons-group"
                  value={data}
                  data-testid ={`tfq-${index}`}
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
          ))}
        </FormControl>
      </CardToShowQuestion>
    </div>
  );
}

export default TrueOrFalseQuestion;
