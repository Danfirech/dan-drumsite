import styled from "styled-components";
import Navbar from "./components/Navbar";
import Video from "./components/video.mp4";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import Videos from "./components/Videos";
import About from "./components/About";

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #d3d3d3;
  height: 2000px;
`;

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: none;
  height: 100vh;
`;

function App() {
  return (
    // <Wrapper>
    <Container>
      <Navbar />
      <video className="videoTag" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <Router>
        <Routes>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Videos" element={<Videos />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </Container>
    // </Wrapper>
  );
}

export default App;
