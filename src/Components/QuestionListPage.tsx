import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import classes from "./QuestionListPage.module.css";
import { Details } from "../Interface/interface";
import {
  Button,
  Checkbox,
  TextField,
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Container,
} from "@mui/material";
import questionEnglish from "../QuestionSource/questionEnglish.json";
import questionHindi from "../QuestionSource/questionHindi.json";

const QuestionListPage = () => {
  const [questionList, setQuestionList] = useState<any>([]);
  const [qNum, setqNum] = useState<number>(0);
  const location: any = useLocation();
  const { prefferedLanguage } = location?.state;
  const navigate = useNavigate();

  const questionDetails = async () => {
    if (prefferedLanguage === "English") {
      await setQuestionList(questionEnglish);
    } else {
      await setQuestionList(questionHindi);
    }
  };

  useEffect(() => {
    questionDetails();
  }, [prefferedLanguage]);

  const getQuestionDetailsBasedOnType = (qNum: number) => {
    switch (questionList[qNum]?.questionType) {
      case "multiple choice":
        return (
          <FormControl>
            <RadioGroup>
              {questionList[qNum]?.option.map((option: [], index: number) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={option}
                    label={option}
                    control={
                      <Radio
                        data-testid={`mcq-${index}`}
                        checked={questionList[qNum]?.selectedAnswer === option}
                        onChange={() => {
                          setQuestionList(
                            questionList.map((data: any, index: number) => {
                              if (index === qNum) {
                                return {
                                  ...data,
                                  isAnswered: true,
                                  selectedAnswer: option,
                                };
                              } else {
                                return data;
                              }
                            })
                          );
                        }}
                      />
                    }
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        );
      case "True or False":
        return (
          <FormControl>
            <RadioGroup>
              {questionList[qNum]?.option.map((option: any, index: number) => {
                return (
                  <FormControlLabel
                    key={index}
                    label={option}
                    value={option}
                    control={
                      <Radio
                        data-testid={`tfq-${index}`}
                        checked={questionList[qNum]?.selectedAnswer === option}
                        onChange={() => {
                          setQuestionList(
                            questionList?.map((data: any, index: number) => {
                              if (index === qNum) {
                                return {
                                  ...data,
                                  isAnswered: true,
                                  selectedAnswer: option,
                                };
                              } else {
                                return data;
                              }
                            })
                          );
                        }}
                      />
                    }
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        );
      case "Fill in The Blank":
        return (
          <TextField
            fullWidth
            placeholder={"Please enter your answer"}
            variant={"standard"}
            value={questionList[qNum].selectedAnswer}
            onChange={(e) => {
              setQuestionList(
                questionList?.map((data: any, index: number) => {
                  if (index === qNum) {
                    return {
                      ...data,
                      isAnswered: true,
                      selectedAnswer: e.target.value,
                    };
                  } else {
                    return data;
                  }
                })
              );
            }}
          />
        );
      case "match the following":
        return (
          <Container>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div>
                {questionList[qNum]?.left.map((data: [], index: number) => {
                  return (
                    <Typography
                      key={index}
                      style={{ display: "block", marginTop: "10px" }}
                      data-testid={`left-${index}`}
                    >
                      {data}
                    </Typography>
                  );
                })}
              </div>
              <div style={{ paddingLeft: "50px" }}>
                {questionList[qNum]?.right.map((data: [], index: number) => {
                  return (
                    <Typography
                      key={index}
                      style={{ marginTop: "10px", display: "block" }}
                      data-testid={`left-${index}`}
                    >
                      {data}
                    </Typography>
                  );
                })}
              </div>
            </div>
            <FormControl>
              <RadioGroup style={{ marginLeft: "45px", marginTop: "10px" }}>
                {questionList[qNum]?.option.map((option: [], index: number) => {
                  return (
                    <FormControlLabel
                      key={index}
                      label={option}
                      value={option}
                      control={
                        <Radio
                          data-testid={`mfg-${index}`}
                          checked={
                            option === questionList[qNum]?.selectedAnswer
                          }
                          onChange={() => {
                            setQuestionList(
                              questionList?.map((data: any, index: number) => {
                                if (index === qNum) {
                                  return {
                                    ...data,
                                    isAnswered: true,
                                    selectedAnswer: option,
                                  };
                                } else {
                                  return data;
                                }
                              })
                            );
                          }}
                        />
                      }
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Container>
        );
      case "multi select":
        return (
          <FormControl>
            <RadioGroup>
              {questionList[qNum]?.option.map((option: [], index: number) => {
                return (
                  <FormControlLabel
                    key={index}
                    label={option}
                    value={option}
                    control={
                      <Checkbox
                        data-testid={`msq-${index}`}
                        onChange={(e) => {
                          setQuestionList(
                            questionList?.map((data: any, index: number) => {
                              if (index === qNum) {
                                return {
                                  ...data,
                                  selectedAnswer: questionList?.[
                                    qNum
                                  ]?.selectedAnswer?.includes(e.target.value)
                                    ? typeof questionList?.[qNum]
                                        ?.selectedAnswer !== "string" &&
                                      questionList?.[
                                        qNum
                                      ]?.selectedAnswer?.filter(
                                        (q: string) => q !== e.target.value
                                      )
                                    : questionList?.[
                                        qNum
                                      ]?.selectedAnswer.concat(e.target.value),
                                  isAnswered: true,
                                };
                              } 
                              else {
                                return data;
                              }
                            })
                          );
                        }}
                        checked={questionList[qNum]?.selectedAnswer.includes(
                          option
                        )}
                      />
                    }
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        );
      default:
        break;
    }
  };

  return (
    <Container>
      <div className={classes.main_heading}>
        <div className={classes.heading} data-testid="main-div">
          {questionList.map((question: any, index: number) => (
            <div
              data-testid={`main-${index}`}
              className={classes.question_number}
              style={{
                background: question.isAnswered ? "red" : "#ccc",
              }}
              key={index}
              onClick={() => {
                setqNum(index);
              }}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            marginTop: "25px",
          }}
        >
          <div>{questionList[qNum]?.question}</div>
          <div>{getQuestionDetailsBasedOnType(qNum)}</div>
        </div>
        {questionList[qNum]?.id === questionList.length && (
          <Button
            className={classes.btn}
            data-testid="btn"
            variant="contained"
            color="primary"
            name="submit"
            type="submit"
            onClick={() => {
              navigate("/result", {
                state: {
                  questionList: questionList,
                },
              });
            }}
          >
            Submit
          </Button>
        )}
      </div>
    </Container>
  );
};

export default QuestionListPage;
