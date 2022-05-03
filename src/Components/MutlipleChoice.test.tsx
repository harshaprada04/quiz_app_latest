// import { fireEvent, getByText, render, screen, waitFor } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import { BrowserRouter } from "react-router-dom";
// import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
// import { act } from "react-dom/test-utils";

// let AddRouting:any= ()=>{
//   const baseProps:any= {
//     questionDetails:{
//       question:"What is the capital of India",
//       option:[1,2,3,4]
//     }
    
//   }
//   return(
//       <BrowserRouter>
//       <MultipleChoiceQuestion {...baseProps}/>
//       </BrowserRouter>
//   )
// }

// test("Checking the heading",()=>{
//   render(<AddRouting/>)
//   let heading = screen.getByTestId("heading")
//   expect(heading.innerHTML).toBe("What is the capital of India")
// })


// test("Checking the selection of choices",async ()=>{
//   render(<AddRouting/>)
  
//   await act(async ()=>{
//     let option = await screen.getByTestId("mcq-0")
//     let choice = await screen.getByLabelText("1")
//     fireEvent.click(choice,{checked:true})

//     waitFor(()=>{
//       expect(option).toBeInTheDocument()
//       expect(option).toHaveValue("1")
//     })
//   })
// })

