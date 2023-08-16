import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import "./App.css";
import StreamButton from "./StreamButton.tsx";
import Button, { ButtonLink } from "./Button.tsx";

const pulseAnimation = keyframes`
    0% {
      transform: scale(0.9);
    }
    65% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.9);
    }
`;

const Title = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 2.6em;
  letter-spacing: -0.06em;

  text-align: center;
  color: white;
  margin: 0;
  margin-bottom: 10px;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #49ff18,
    0 0 30px #49ff18, 0 0 40px #49ff18, 0 0 55px #49ff18, 0 0 75px #49ff18;
`;

const SubTitle = styled.h2`
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 1.5em;

  text-align: center;
  color: white;
  margin: 0;
  margin-top: -15px;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #49ff18,
    0 0 30px #49ff18, 0 0 40px #49ff18, 0 0 55px #49ff18, 0 0 75px #49ff18;
`;

const Container = styled.div`
  background-color: #9bee69;
  min-height: 100vh;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-image: url("backgroundSmaller.jpg");
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
  max-width: 550px;
`;

const LogoImage = styled.img`
  width: 90%;
  max-width: 550px;

  animation-name: ${pulseAnimation};
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-direction: forward;
  animation-duration: 2s;
`;

function App() {
  const [singlesOpen, setSinglesOpen] = useState(false);

  return (
    <Container>
      <Area>
        <LogoImage src="logo.png"></LogoImage>
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
          <ButtonLink
            href="https://open.spotify.com/artist/0WgvFxGODaEBXwRSSprC9C?si=JtR9IZWEQiy3owjFO3bdrw"
            target="_blank"
          >
            Follow on Spotify
          </ButtonLink>
          <ButtonLink
            href="https://deviceoperator.bandcamp.com/"
            target="_blank"
          >
            Follow on Bandcamp
          </ButtonLink>
          <ButtonLink
            href="https://soundcloud.com/deviceoperator"
            target="_blank"
          >
            Follow on Soundcloud
          </ButtonLink>
        </ButtonContainer>
      </Area>
    </Container>
  );
}

export default App;
