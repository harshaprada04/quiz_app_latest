import React, { useContext, useEffect, useState, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router";
import Context from "../Contexts/contexts";
import FiilInTheBlankQuestion from "./FillInTheBlank";
import MatchTheFollowingQuestion from "./MatchTheFolloingQuestion";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import MultiSelectQuestion from "./MultiSelectQuestion";
import TrueOrFalseQuestion from "./TrueOrFalse";
import classes from "./QuestionListPage.module.css";
import { Button } from "@mui/material";
import { FetchQuestionList } from "../actions/questions";

const QuestionListPage = () => {
  const navigate = useNavigate();
  const { questionId } = useParams();
  console.log(questionId)
  const qId = questionId ? parseInt(questionId) : 0;
  const [isLastQuestion, setIsLastQuestion] = useState<boolean>(false);
  const [questionDetails, setQuestionDetails] = useState<any>({});
  const [submittedAnswer, setSubmittedAnswer] = useState("");
  const contexts = useContext(Context);

  const fetechQuestions = async () => {
    const questions: any = await FetchQuestionList(contexts.selectedLanguage);
    await contexts.setQuestionList(questions);
    navigate(`/question/${questions[0].id}`);
  };

  useEffect(() => {
    fetechQuestions();
  }, []);

  useEffect(() => {
    contexts.changeHandler(qId, submittedAnswer);
  }, [submittedAnswer]);

  const question = async () => {
    const details: any = await contexts.getQuestionById(qId);
    setQuestionDetails(details);
    await setSubmittedAnswer(details.selectedAnswer);

    const position =
      contexts.questionList.findIndex(
        (question: any) => details.id === question.id
      ) + 1;
    setIsLastQuestion(position === contexts.questionList.length);
  };

  useEffect(() => {
    question();
    return () => {
      setSubmittedAnswer("");
    };
  }, [qId]);

  const navigateToNext = async (id: any) => {
    navigate(`/question/${id}`);
  };

  const getQuestionDetailsBasedOnType = () => {
    switch (questionDetails.questionType) {
      case "multiple choice":
        return (
          <MultipleChoiceQuestion
            questionDetails={questionDetails}
            clickHandler={(e: ChangeEvent<HTMLInputElement>) => {
              setSubmittedAnswer(e.target.value);
            }}
            submittedAnswer={submittedAnswer}
          />
        );
      case "True or False":
        return (
          <TrueOrFalseQuestion
            questionDetails={questionDetails}
            clickHandler={(e: ChangeEvent<HTMLInputElement>) => {
              setSubmittedAnswer(e.target.value);
            }}
            submittedAnswer={submittedAnswer}
          />
        );
      case "Fill in The Blank":
        return (
          <FiilInTheBlankQuestion
            questionDetails={questionDetails}
            changeHandler={(e: ChangeEvent<HTMLInputElement>) =>
              setSubmittedAnswer(e.target.value)
            }
            submittedAnswer={submittedAnswer}
          />
        );
      case "match the following":
        return (
          <MatchTheFollowingQuestion
            questionDetails={questionDetails}
            changeHandler={setSubmittedAnswer}
            submittedAnswer={submittedAnswer}
          />
        );
      case "multi select":
        return (
          <MultiSelectQuestion
            questionDetails={questionDetails}
            changeHandler={(data: any) =>
              setSubmittedAnswer((prev: any) => {
                if (prev && prev.length) {
                  const index = prev.findIndex((elem: any) => elem === data);
                  if (index < 0) {
                    return [...prev, data];
                  } else {
                    prev.splice(index, 1);
                    return prev;
                  }
                } else {
                  return [data];
                }
              })
            }
            submittedAnswer={submittedAnswer}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className={classes.main_heading}>
      <div>
        <div className={classes.heading} data-testid="main-div">
          {contexts.questionList.map((question: any, index) => (
            <div
              data-testid={`main-${index}`}
              className={classes.question_number}
              style={{
                background: question.isAnswered ? "red" : "#ccc",
              }}
              key={question.id}
              onClick={() => {
                navigateToNext(question.id);
              }}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <div>{getQuestionDetailsBasedOnType()}</div>
      <div className={classes.btn}
      >
        {isLastQuestion && (
          <Button
          data-testid="btn"
            variant="contained"
            color="primary"
            name="submit"
            type="submit"
            onClick={() => {
              navigate("/result");
            }}
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuestionListPage;
