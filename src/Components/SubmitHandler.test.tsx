import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SubmitHandler from "./SubmitHandler";

let AddRouting: any = () => {
  return (
    <BrowserRouter>
      <SubmitHandler />
    </BrowserRouter>
  );
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {
      questionList: [
        {
          id: 1,
          language: "English",
          question: "What is the capital of India?",
          questionType: "multiple choice",
          option: ["Delhi", "Bangalore", "Mumbai", "Rajkot"],
          isAnswered: true,
          actualAnswer: "Delhi",
          selectedAnswer: "Delhi",
          isCorrectAns: true,
        },
        {
          id: 2,
          language: "English",
          question: "Is electrons move faster than the speed of light",
          questionType: "True or False",
          option: ["True", "False"],
          isAnswered: true,
          actualAnswer: "False",
          selectedAnswer: "True",
          isCorrectAns: false,
        },
        {
          id: 3,
          language: "English",
          question: "The current India's prime minister is -",
          questionType: "Fill in The Blank",
          option: [],
          isAnswered: false,
          actualAnswer: "Narendra Modi",
          selectedAnswer: "",
          isCorrectAns: false,
        },
        {
          id: 4,
          language: "English",
          question: "Match the following questions",
          left: ["a.React", "b.JavaScript", "c.props", "d.state"],
          right: ["1.Immuttable", "2.Muttable", "3.Declartive", "4.Imperative"],
          questionType: "match the following",
          option: [
            "a-3,b-4,c-1,d-2",
            "a-2,b-3,c-1,d-4",
            "a-1,b-3,c-2,d-4",
            "a-3,b-2,c-4,d-1",
          ],
          isAnswered: false,
          actualAnswer: "a-3,b-4,c-1,d-2",
          selectedAnswer: "",
          isCorrectAns: false,
        },
        {
          id: 5,
          language: "English",
          question:
            "In below mentioned options please select the states that are there in India",
          questionType: "multi select",
          option: ["Karnataka", "Chandigarh", "Delhi", "Goa", "Puducherry"],
          isAnswered: true,
          actualAnswer: ["Karnataka", "Goa"],
          selectedAnswer: ["Karnataka", "Goa"],
          isCorrectAns: true,
        },
      ],
    },
  }),
}));

it("renders without crashing", () => {
  render(<AddRouting />);
});

it("page has home button or not", () => {
  render(<AddRouting />);
  let home = screen.getByRole("button");
  expect(home).toBeInTheDocument();
  let click = fireEvent.click(home);
  expect(click).toBe(true);
});
