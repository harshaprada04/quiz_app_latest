import { type } from "os";

export type Details = {
  id: number;
  language: string;
  question?: string;
  questionType: string;
  option?: any;
  isAnswered: boolean;
  actualAnswer: any;
  selectedAnswer: any;
  left?: [];
  right?:[];
  isCorrectAns:boolean
};

