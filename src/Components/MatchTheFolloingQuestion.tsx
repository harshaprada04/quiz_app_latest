import classes from "./MatchTheFollowingQuestion.module.css";
import CardToShowQuestion from "./CardToShowQuestion";
import {
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

function MatchTheFollowingQuestion(props: any) {
  
  return (
    <div>
      <CardToShowQuestion MatchTheFollowingQuestion={MatchTheFollowingQuestion}>
        <div>
          <Table
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: "none",
              },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography data-testid="heading">Match The following the question</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <TableRow>
                {props.questionDetails.question1.map(
                  (data: any, index: number) => {
                    return (
                      <TableCell
                        style={{ display: "block" }}
                        key={`tbd_div-${index}`}
                        data-testid= {`tbd1-${index}`}
                      >
                        {data}
                      </TableCell>
                    );
                  }
                )}
              </TableRow>
              <TableRow>
                {props.questionDetails.question2.map(
                  (data: any, index: number) => {
                    return (
                      <TableCell
                        style={{ display: "block" }}
                        key={`tbd2_div-${index}`}
                        data-testid={`tbd2-${index}`}
                      >
                        {data}
                      </TableCell>
                    );
                  }
                )}
              </TableRow>
            </TableBody>
          </Table>
          <FormControl>
            {props.questionDetails.option.map((data: [], index: number) => {
              return (
                <div key={`mfq_div-${index}`}>
                  <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                  <RadioGroup
                    data-testid= {`mfq-${index}`}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                    value={data}
                  >
                    <FormControlLabel
                      value={data}
                      control={<Radio />}
                      label={data}
                      checked={data === props.submittedAnswer}
                      onChange={() => props.changeHandler(data)}
                    />
                  </RadioGroup>
                </div>
              );
            })}
          </FormControl>
        </div>
      </CardToShowQuestion>
    </div>
  );
}

export default MatchTheFollowingQuestion;
