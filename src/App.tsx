import { ContextProvider } from "./Contexts/contexts";
import Routing from "./Components/Routing";
import classes from "../src/App.module.css"

function App() {
  return (
    <div className={classes.background}>
      <ContextProvider>
        <Routing />
      </ContextProvider>
    </div>
  );
}

export default App;
