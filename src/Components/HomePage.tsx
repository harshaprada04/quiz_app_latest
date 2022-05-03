import { useNavigate } from "react-router";
import React, { useState, ChangeEvent } from "react";
import { useContext } from "react";
import Context from "../Contexts/contexts";
import classes from "./homepage.module.css";
import { HomePageDetails } from "../Interface/interface";
import {
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Button,
} from "@mui/material";


function HomePage() {
  const [userDetails, setUserDetails] = useState<HomePageDetails>({
    firstName: "",
    lastName: "",
    gender: "",
    prefferedLanguage: "",
  });
  const navigate = useNavigate();
  const context = useContext(Context);

  function clickHandler() {
    navigate("/question/:questionId");
    if (userDetails.prefferedLanguage.length > 0) {
      return context.setSelectedLanguage(userDetails.prefferedLanguage);
    }
  }
  return (
      <div className={classes.dispaly}>
        <header>Login</header>
        <Container >
          <div className={classes.allignment}>
            <TextField
            name= "firstname"
            sx={{ minWidth: 220 }}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              onChange={(e) =>
                setUserDetails((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
              value={userDetails.firstName}
              autoComplete="off"
            />
            <TextField
            sx={{ minWidth: 220 }}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              onChange={(e) =>
                setUserDetails((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
              value={userDetails.lastName}
              autoComplete="off"
            />

            <FormControl sx={{ minWidth: 220 }}>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
              inputProps={{ "data-testid": "gender-selection" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userDetails.gender}
                label="Gender"
                onChange={(e) =>
                  setUserDetails((prev) => ({
                    ...prev,
                    gender: e.target.value,
                  }))
                }
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 220 }}>
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
              inputProps={{ "data-testid": "language-selection" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userDetails.prefferedLanguage}
                label="Language"
                onChange={(e) =>
                  setUserDetails((prev) => ({
                    ...prev,
                    prefferedLanguage: e.target.value,
                  }))
                }
              >
                <MenuItem  value="English">English</MenuItem>
                <MenuItem value="Hindi">Hindi</MenuItem>
              </Select>
            </FormControl>
            </div>
        </Container>
        <Button
          variant="contained"
          color="primary"
          disabled={
            !(
              userDetails.prefferedLanguage &&
              userDetails.firstName &&
              userDetails.lastName
            )
          }
          className={classes.btn}
          name="submit"
          type="submit"
          onClick={clickHandler}
        >
          Submit
        </Button>
      </div>
  );
}

export default HomePage;
