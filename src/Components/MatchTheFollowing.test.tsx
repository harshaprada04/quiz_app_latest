// import "@testing-library/jest-dom/extend-expect";
// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import MatchTheFollowingQuestion from "./MatchTheFolloingQuestion";
// import { act } from "react-dom/test-utils";

// let AddRouting:any= ()=>{
//     const baseProps:any= {
//         questionDetails:{
//             question1:[1,2,3,4],
//             question2:[6,7,8,5],
//             option:[9,10,11,12]
//         },
//       changeHandler:jest.fn(),
//       submittedAnswer:jest.fn()
//     }
//     return(
//         <BrowserRouter>
//         <MatchTheFollowingQuestion {...baseProps}/>
//         </BrowserRouter>
//     )
// }

// test("Checking the heading",()=>{
//     render(<AddRouting/>)
//     let heading = screen.getByTestId("heading")
//     expect(heading.innerHTML).toBe("Match The following the question")
// })

// test("Checking the Table",async ()=>{
//     render(<AddRouting/>)
//     await act(()=>{
//         let table_1 = screen.getByTestId("tbd1-0");
//         let table_2 = screen.getByTestId("tbd2-0");
//         let option = screen.getByTestId("mfq-0");
//         let value = screen.getByLabelText("10")
//         fireEvent.click(value,{checked:true})
//         waitFor(()=>{
//             expect(table_1).toBeInTheDocument()
//             expect(table_2).toBeInTheDocument()
//             expect(option).toBeInTheDocument()
//         })
//     }
//     )
//     let heading = screen.getByTestId("heading")
//     expect(heading.innerHTML).toBe("Match The following the question")
// })
