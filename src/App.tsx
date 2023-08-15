import React, { useState } from "react";
import styled, { css } from "styled-components";
import "./App.css";
import StreamButton from "./StreamButton.tsx";
import Button from "./Button.tsx";

const Title = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 2em;
  letter-spacing: -0.06em;

  text-align: center;
  color: white;
  margin: 0;
  margin-bottom: 10px;
`;

const SubTitle = styled.h2`
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 1em;

  text-align: center;
  color: white;
  margin: 0;
`;

const Container = styled.div`
  background-color: #9bee69;
  min-height: 100vh;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-image: url("backgroundSmaller.png");
  background-position: center;
  padding-top: 40px;
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 90%;
  > * {
    margin-bottom: 15px;
    &:last-child {
      margin: none;
    }
  }
`;

const Area = styled.div`
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [singlesOpen, setSinglesOpen] = useState(false);

  return (
    <Container>
      <Area>
        <Title>ALBUM</Title>
        <SubTitle>OUT AUGUST 18TH</SubTitle>
      </Area>
      <Area>
        <Title>LISTEN</Title>
        <ButtonContainer>
          <StreamButton
            label={`Listen to KiwiPop! Singles`}
            img="singlesNew.png"
          ></StreamButton>
          <StreamButton
            label="Listen to Cherry Fortune"
            img="cherryNew.png"
          ></StreamButton>
          <StreamButton
            label="Listen to Device Operator"
            img="deviceNew.png"
          ></StreamButton>
        </ButtonContainer>
      </Area>
      <Area>
        <Title>SUPPORT</Title>
        <ButtonContainer>
          <Button>Follow on Spotify</Button>
          <Button>Follow on Bandcamp</Button>
          <Button>Follow on Soundcloud</Button>
        </ButtonContainer>
      </Area>
    </Container>
  );
}

export default App;
