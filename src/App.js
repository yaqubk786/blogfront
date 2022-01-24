import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Topdiv from "./components/Top Div/Topdiv";
import Latest from "./components/Latests/Latest";
import Articles from "./components/Articles/Articles";
import Stories from "./components/Stories/Stories";
import Adv from "./components/Adv/Adv";
import Vgallery from "./components/Gallery/Vgallery";
import Catch from "./components/Catch/Catch";
import CategoryPage from "./pages/Category/categoryPage";
import PostPage from "./pages/Post/postPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Technology from './Technology';

export const Home = () => {
  return (
    <>
      <Topdiv></Topdiv>
      <Latest></Latest>
      <Articles></Articles>
      <Vgallery />
      <Stories></Stories>
    </>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/category/:id" element={<CategoryPage/>} />
        <Route exact path="/:category/post/:id" element={<PostPage/>} />
      </Routes>
    </Router>
  );
}

export default App;


