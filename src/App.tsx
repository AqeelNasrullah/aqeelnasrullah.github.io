import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import { IconContext } from "react-icons";

const App = () => {
  return (
    <BrowserRouter>
      <IconContext.Provider
        value={{ size: "20px", style: { marginBottom: "-5px" } }}
      >
        <Router />
      </IconContext.Provider>
    </BrowserRouter>
  );
};

export default App;
