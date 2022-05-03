// import "@testing-library/jest-dom/extend-expect";
// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import { act } from "react-dom/test-utils";
// import MultiSelectQuestion from "./MultiSelectQuestion";


// let AddRouting:any= ()=>{
//     const baseProps:any= {
//         questionDetails:{
//           question:"What is the capital of India",
//           option:[1,2,3,4]
//         },
//         changeHandler:jest.fn()
//       }
//     return(
//         <BrowserRouter>
//         <MultiSelectQuestion {...baseProps}/>
//         </BrowserRouter>
//     )
// }

// test("Checking the heading",()=>{
//     render(<AddRouting/>)
//     let heading = screen.getByTestId("heading")
//     expect(heading.innerHTML).toBe("What is the capital of India")
// })


// test("Checking the selection",async ()=>{
//     render(<AddRouting/>)
//     await act(()=>{
//        let select = screen.getByTestId("msq-0");
//        let option = screen.getByLabelText("1");
//        fireEvent.click(option,{checked:true});
//        waitFor(()=>{
//            expect(select).toBeInTheDocument();
//            expect(select).toBe("1");
//        })
//     })
//     let heading = screen.getByTestId("heading")
//     expect(heading.innerHTML).toBe("What is the capital of India")
// })