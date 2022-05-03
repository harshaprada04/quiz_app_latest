import { type } from "os";

export type Details = {
  id: number;
  language: string;
  question: string;
  questionType: string;
  option: [];
  isAnswered: boolean;
  actualAnswer: string;
  selectedAnswer: string;
};

export type HomePageDetails = {
  firstName: string;
  lastName: string;
  gender: string;
  prefferedLanguage: string;
};
