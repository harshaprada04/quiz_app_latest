import { createContext, useState } from "react";
import { Details } from "../Interface/interface";

const Context = createContext({
  questionList: [],
  setQuestionList: (a: Details[]) => {},
  selectedLanguage: "",
  setSelectedLanguage: (a: {}) => {},
  count: { correctAns: 0, wrongAns: 0 },
  setCount: () => {},
  getQuestionById: (id: number): any => {},
  changeHandler: (id: number, answer: string): any => {}
});

export function ContextProvider(props: any) {
  const [questionList, setQuestionList] = useState<Details[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [count, setCount] = useState({ correctAns: 0, wrongAns: 0 });

  function changeHandler(id: number, answer: string) {
    setQuestionList(
      questionList.map((question) => {
        if (question.id === id) {
          question.isAnswered = answer.length ? true : false;
          question.selectedAnswer = answer;
        }
        return question;
      })
    );
    if (id == questionList.length) {
      submitHandler(questionList);
    }
  }

  function submitHandler(questionList: any) {
    setCount({ correctAns: 0, wrongAns: 0 });
    for (let i: number = 0; i < questionList.length; i++) {
      if (questionList[i].isAnswered === true) {
        let isCorrectAns = false;
        if (questionList[i].actualAnswer instanceof Array) {
          isCorrectAns = questionList[i].selectedAnswer.every(
            (selected: string) =>
              questionList[i].actualAnswer.some(
                (actual: string) => actual === selected
              )
          );
        } else {
          isCorrectAns =
            questionList[i].actualAnswer === questionList[i].selectedAnswer;
        }
        if (isCorrectAns) {
          setCount((prevState) => ({
            ...prevState,
            correctAns: prevState.correctAns + 1,
          }));
        } else {
          setCount((prevState) => ({
            ...prevState,
            wrongAns: prevState.wrongAns + 1,
          }));
        }
      }
    }
  }

  function getQuestionById(id: number) {
    return questionList.find((question: any) => question.id === id) || [];
  }


 
  const context: any = {
    questionList,
    count,
    setCount,
    selectedLanguage,
    setSelectedLanguage,
    changeHandler,
    setQuestionList,
    getQuestionById
  };

  return (
    <div>
      <Context.Provider value={context}>{props.children}</Context.Provider>
    </div>
  );
}

export default Context;
