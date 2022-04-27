import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Container from "@mui/material/Container";
import PostListProvider from "./contexts/PostListContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import DetailPage from "./components/Main/DetailPage/DetailPage";
import PersonalAccount from "./components/PersonalAccount/PersonalAccount";

function App() {
  return (
    <PostListProvider>
      <BrowserRouter>
        <Container fixed>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/info" element={<Contacts />} />
            <Route path="/myaccount" element={<PersonalAccount />} />
            <Route path="/:id" element={<DetailPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </PostListProvider>
  );
}

export default App;
