import { Route, Routes } from "react-router-dom";
import SubmitHandler from "./SubmitHandler";
import HomePage from "./HomePage";
import QuestionListPage from "./QuestionListPage";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question/:questionId/*" element={<QuestionListPage />} />

        <Route path="/result" element={<SubmitHandler />} />
      </Routes>
    </div>
  );
}

export default Routing;
