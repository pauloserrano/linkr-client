import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from "../context/GlobalContext";
import { GlobalStyle } from "../styles"
import SignUp from "./Signup";
import Login from "./Login";
import Timeline from "./Timeline";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <GlobalContextProvider>
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/sign-up" element={ < SignUp /> } />
            <Route path="/timeline" element={<Timeline />}/>
          </Routes>
      </GlobalContextProvider>
    </Router>
  );
}

export default App;
