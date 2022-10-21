import { GlobalStyle } from "../styles"
import HashtagTrending from "./hashtags/hashtagsTrending";
import HashtagPage from "./hashtags/hashtagPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <div>
      <BrowserRouter>

        <GlobalStyle />

        <Routes>

          <Route path="/" element={<HashtagTrending/>}/>
          <Route path="/hashtag/:hashtag" element={<HashtagPage/>}/>

        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
