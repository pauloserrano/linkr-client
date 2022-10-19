import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from "../context/GlobalContext";
import { GlobalStyle } from "../styles"
import Timeline from "./Timeline";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <GlobalContextProvider>
          <Routes>
            <Route path="/timeline" element={<Timeline />}/>
          </Routes>
      </GlobalContextProvider>
    </Router>
  );
}

export default App;
