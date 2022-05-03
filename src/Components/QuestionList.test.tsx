// import { fireEvent, getByText, render, screen,waitFor } from "@testing-library/react";

// import "@testing-library/jest-dom/extend-expect";
// import { BrowserRouter } from "react-router-dom";
// import { ContextProvider } from "../Contexts/contexts";
// import QuestionListPage from "./QuestionListPage";
// import { act } from "react-dom/test-utils";
// import Router from "react-router-dom";

// let AddRouting:any = () => {
//     return (
//       <BrowserRouter>
//       <ContextProvider>
//         <QuestionListPage />
//         </ContextProvider>
//       </BrowserRouter>
//     );
//   };

//   test("main-div is there or not",async ()=>{
//       render(<AddRouting/>)
//       const div = screen.getByTestId("main-div")
//       expect(div).toBeInTheDocument();
//       await act(() => {
//         let title = screen.getByTestId("main-div");
//         let click = fireEvent.click(title);
//          waitFor(() => {
//           expect(click).toBe(true);
//         });
//       });
//   })


//   jest.mock("react-router-dom", () => ({
//     ...jest.requireActual("react-router-dom"),
//     useParams: jest.fn(),
//    }));
   
//   test("",async()=>{
//       render(<AddRouting/>)

//       await act(async () => {
//         const useRefSpy = jest
//           .spyOn(Router, "useParams")
//           .mockReturnValueOnce({ questionId: "1" } );
//       })
//   })
  