// import { fireEvent, getByText, render, screen, waitFor } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import { BrowserRouter } from "react-router-dom";
// import { act } from "react-dom/test-utils";
// import TrueOrFalseQuestion from "./TrueOrFalse";

// let AddRouting:any= ()=>{
//   const baseProps:any= {
//     questionDetails:{
//       question:"Is react is muttable?",
//       option:[1, 2]
//     }
    
//   }
//   return(
//       <BrowserRouter>
//       <TrueOrFalseQuestion {...baseProps}/>
//       </BrowserRouter>
//   )
// }

// test("Checking the heading",()=>{
//   render(<AddRouting/>)
//   let heading = screen.getByTestId("heading")
//   expect(heading.innerHTML).toBe("Is react is muttable?")
// })


// test("Checking the selection of choices",async ()=>{
//   render(<AddRouting/>)
  
//   await act(async ()=>{
//     let option = await screen.getByTestId("tfq-0")
//     let choice = await screen.getByLabelText("1")
//     fireEvent.click(choice,{checked:true})

//     waitFor(()=>{
//       expect(option).toBeInTheDocument()
//       expect(option).toHaveValue("1")
//     })
//   })
// })