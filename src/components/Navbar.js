import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 140px;
  display: flex;
  background-color: #d3d3d3;
`;

const Left = styled.div`
  width: 33%;
  display: flex;
  background-color: #d3d3d3;
  align-items: center;
`;
const Middle = styled.div`
  width: 33%;
  display: flex;
  background-color: #d3d3d3;
`;
const Right = styled.div`
  width: 34%;
  display: flex;
  background-color: #d3d3d3;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`;

const Name = styled.h1`
  font-weight: 400;
  color: #0b2545;
  font-family: Carter One;
  font-size: 60px;
  padding-left: 40px;
`;

const Tag = styled.h1`
  font-weight: 200;
  color: #0b2545;
  font-family: Carter One;
  font-size: 40px;
`;

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Name>Dan Possehl</Name>
      </Left>
      <Middle></Middle>
      <Right>
        <Tag>Contact</Tag>
        <Tag>About</Tag>
        <Tag>Video</Tag>
      </Right>
    </Container>
  );
};

export default Navbar;
