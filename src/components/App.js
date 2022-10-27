import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from "../context/GlobalContext";
import { GlobalStyle } from "../styles"
import SignUp from "./Signup";
import Login from "./Login";
import Timeline from "./Timeline";
import HashtagPage from "./hashtagPage";
import UserPage from "./UserPage";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <GlobalContextProvider>
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/sign-up" element={ < SignUp /> } />
            <Route path="/timeline" element={<Timeline />}/>
            <Route path="/hashtag/:hashtag" element={<HashtagPage/>}/>
            <Route path="/user/:userId" element={<UserPage/>}/>
          </Routes>
      </GlobalContextProvider>
    </Router>
  );
}

export default App;
