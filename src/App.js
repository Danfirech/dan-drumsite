import styled from "styled-components";
import Navbar from "./components/Navbar";
import DanFull from "./images/danfull.png";

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
    <div className="App">
      <Navbar />
      <Container></Container>
    </div>
  );
}

export default App;
