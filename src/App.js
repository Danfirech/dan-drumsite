import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: black;
`;

function App() {
  return (
    <div className="App">
      <Container></Container>
    </div>
  );
}

export default App;
