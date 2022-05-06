import { useNavigate } from "react-router";
import React, { useState } from "react";
import classes from "./homepage.module.css";
import {
  FormControl,
  TextField,
  Button,
  Container,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";

function HomePage() {
  const [name, setName] = useState<string>("");
  const [prefferedLanguage, setPrefferedLanguage] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/questionsPage/`, {
      state: {
        prefferedLanguage: prefferedLanguage,
      },
    });
  };

  return (
    <div className={classes.dispaly}>
      <header>Login</header>
      <Container>
        <div className={classes.allignment}>
          <TextField
            sx={{ width: 220 }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            value={name}
            autoComplete="off"
          />

          <FormControl style={{ width: 100 }} margin="normal">
            <Typography>Gender</Typography>
            <RadioGroup
              data-testid="gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              value={gender}
            >
              <FormControlLabel
                label={"Male"}
                control={<Radio value={"Male"} checked={gender === "Male"} />}
              />
              <FormControlLabel
                label={"Female"}
                control={
                  <Radio value={"Female"} checked={gender === "Female"} />
                }
              />
              <FormControlLabel
                label={"Other"}
                control={<Radio value={"Other"} checked={gender === "Other"} />}
              />
            </RadioGroup>
          </FormControl>

          <FormControl style={{ width: 100 }} margin="normal">
            <Typography>Language</Typography>
            <RadioGroup
              data-testid={"Language"}
              onChange={(e) => {
                setPrefferedLanguage(e.target.value);
              }}
              value={prefferedLanguage}
            >
              <FormControlLabel
                label={"English"}
                control={
                  <Radio
                    value={"English"}
                    checked={prefferedLanguage === "English"}
                  />
                }
              />
              <FormControlLabel
                label={"Hindi"}
                control={
                  <Radio
                    value={"Hindi"}
                    checked={prefferedLanguage === "Hindi"}
                  />
                }
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Container>
      <Button
        variant="contained"
        color="primary"
        disabled={!(name && gender && prefferedLanguage)}
        className={classes.btn}
        name="submit"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
}

export default HomePage;
