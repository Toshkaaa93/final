import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PostProvider from "./contexts/PostContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import PageNotFound from "./components/404/404";

function App() {
  return (
    <PostProvider>
      <div className="container my-5">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/posts" element={<Main />} />
            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth/logout" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </PostProvider>
  );
}

export default App;
