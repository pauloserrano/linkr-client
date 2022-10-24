import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from "../context/GlobalContext";
import { GlobalStyle } from "../styles"
import SignUp from "./Signup";
import Login from "./Login";
import Timeline from "./Timeline";
import HashtagPage from "./hashtags/hashtagPage";

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
          </Routes>
      </GlobalContextProvider>
    </Router>
  );
}

export default App;
