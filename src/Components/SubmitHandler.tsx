import React from "react";
import clasees from "./submitHandler.module.css";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import {
  Container,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";

function SubmitHandler() {
  const location = useLocation() as {
    state: {
      questionList: any;
    };
  };
  const { questionList } = location?.state;
  const navigation = useNavigate();
  const [count, setCount] = useState({ correctAns: 0, wrongAns: 0 });

  useEffect(() => {
    submitHandler();
  }, []);

  function submitHandler() {
    setCount({ correctAns: 0, wrongAns: 0 });
    for (let i: number = 0; i < questionList?.length; i++) {
      if (questionList[i]?.isAnswered === true) {
        if (questionList[i]?.actualAnswer instanceof Array) {
          if(questionList[i]?.selectedAnswer.length>1){
            questionList[i].isCorrectAns = questionList[i]?.selectedAnswer.every(
              (selected: string) =>
                questionList[i]?.actualAnswer.some(
                  (actual: string) => actual === selected
                )
            );
          }
          else{
             questionList[i].isCorrectAns = false;
          }
          
        } else {
          questionList[i].isCorrectAns =
            questionList[i]?.actualAnswer === questionList[i]?.selectedAnswer;
        }
        if (questionList[i]?.isCorrectAns) {
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

  return (
    <div className={clasees.display}>
      <Button
        className={clasees.btn}
        variant="contained"
        color="primary"
        onClick={() => navigation("/")}
      >
        Home
      </Button>
      <div>
        <Typography style={{ textAlign: "center" }}>
          Thanks for Giving the test your score is : {count.correctAns}/
          {questionList?.length}
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TableContainer
          component={Paper}
          style={{ width: "500px", marginTop: "40px" }}
        >
          <Table sx={{ width: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ display: "flex", flexDirection: "row" }}>
                <TableCell style={{ width: "90px" }} align="left">
                  Question No.
                </TableCell>
                <TableCell style={{ width: "160px" }} align="left">
                  Actual Answer
                </TableCell>
                <TableCell style={{ width: "160px" }} align="left">
                  Selected Answer
                </TableCell>
                <TableCell style={{ width: "90px" }} align="left">
                  Remark
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {questionList.length > 0 &&
                questionList.map((data: any, index: number) => {
                  return (
                    <TableRow key={index} style={{ display: "block" }}>
                      <TableCell style={{ width: "90px" }} align="left">
                        {data.id}
                      </TableCell>
                      <TableCell style={{ width: "160px" }} align="left">
                        {data.actualAnswer}
                      </TableCell>
                      <TableCell style={{ width: "160px" }} align="left">
                        {data.selectedAnswer.length > 0
                          ? data.selectedAnswer
                          : "Un answered"}
                      </TableCell>
                      <TableCell style={{ width: "80px" }} align="left">
                        {data.isCorrectAns === true ? "Right" : "Wrong"}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ width: "400px", height: "150px", marginTop: "20px" }}>
          <Box
            style={{
              marginLeft: 50,
              marginTop: "30px",
              width: 300,
              height: 300,
              borderRadius: "50%",
              backgroundImage: `conic-gradient(lightGreen 0deg, lightGreen ${
                (count.correctAns * 360) / questionList.length
              }deg, lightPink ${
                (count.wrongAns * 360) / questionList.length
              }deg, lightPink 360deg)`,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: 70,
              padding: 10,
              backgroundColor: "none",
            }}
          >
            <Container
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor: "lightGreen",
                  marginTop: 15,
                }}
              />
              <Typography style={{ marginTop: 15, paddingLeft: 10 }}>
                Correct
              </Typography>
            </Container>

            <Container
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor: "lightPink",
                  margin: 10,
                }}
              />
              <Typography>Incorrect</Typography>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitHandler;
