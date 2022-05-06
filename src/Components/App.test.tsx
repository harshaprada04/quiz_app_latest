import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

let AddRouting = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

it("renders app without crashing", () => {
  render(<AddRouting />);
});
