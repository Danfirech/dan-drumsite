import styled from "styled-components";
import Navbar from "./components/Navbar";
import DanFull from "./images/danfull.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import Navbar2 from "./components/Navbar2";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: lightgray;
  background-image: url(${DanFull});
  height: 2300px; ;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/Contact" component={Contact} />
          <Route path="/Navbar2" component={Navbar2} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
