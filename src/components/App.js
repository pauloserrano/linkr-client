import { GlobalStyle } from "../styles";
import { GlobalBackground } from "../styles/GlobalBackground.js";
import SignUp from "./Signup";
import Login from "./Login";
import HashtagTrending from "./hashtags/hashtagsTrending";
import HashtagPage from "./hashtags/hashtagPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <div>
      <BrowserRouter>

        <GlobalStyle />
        <GlobalBackground />

        <Routes>

          <Route path="/home" element={<HashtagTrending/>}/>
          <Route path="/hashtag/:hashtag" element={<HashtagPage/>}/>
          <Route path="/" element={ <Login /> } />
          <Route path="/sign-up" element={ < SignUp /> } />

        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
