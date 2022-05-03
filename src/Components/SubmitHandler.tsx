import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Context from "../Contexts/contexts";
import clasees from "./submitHandler.module.css";
import { useNavigate } from "react-router";
import { classicNameResolver } from "typescript";
import { Button , Typography} from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SubmitHandler() {
  const navigation = useNavigate();
  const contexts = useContext(Context);

  function totalQuestion(question: any) {
    return question.length;
  }

  const data = {
    labels: ["Correct", "Wrong"],
    datasets: [
      {
        label: "# of Questions",
        data: [contexts.count.correctAns, contexts.count.wrongAns],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={clasees.dispaly}>
 
   <Button variant="contained"
            color="primary"
            onClick={()=> navigation("/")}>
              Back
              </Button>
      <div>
      <Typography>Thanks for Giving the test your score is : {contexts.count.correctAns}
          /{totalQuestion(contexts.questionList)}</Typography>
        <Pie data={data} />
      </div>
      </div>
  );
}
