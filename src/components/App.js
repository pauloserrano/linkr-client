import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "../styles";
import { GlobalBackground } from "../styles/GlobalBackground.js";
import SignUp from "./Signup";
import Login from "./Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <GlobalBackground />
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/sign-up" element={ < SignUp /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
