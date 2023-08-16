import React, { useState, memo } from "react";
import { css, styled } from "styled-components";
import Button from "./Button.tsx";
import { LightenDarkenColor } from "lighten-darken-color";

type ButtonProps = {
  label: string;
  img: string;
};

const StreamButton: React.FC<ButtonProps> = ({ label, img }) => {
  const [buttonOpen, setButtonOpen] = useState(false);
  const [innerButtonOpen, setInnerButtonOpen] = useState(false);

  const onClickGlobal = (e) => e.stopPropagation();

  const spotifyLink =
    "https://open.spotify.com/artist/0WgvFxGODaEBXwRSSprC9C?si=JtR9IZWEQiy3owjFO3bdrw";
  const bandcampLink = "https://deviceoperator.bandcamp.com/";
  const youtubeLink =
    "https://www.youtube.com/channel/UCHryOfgdPfnjL1pqEHz7Aqw";
  const soundcloudLink = "https://soundcloud.com/deviceoperator";
  const appleMusicLink =
    "https://music.apple.com/ca/artist/device-operator/1541514586";

  return (
    <StyledButton
      onClick={() => {
        setButtonOpen((o) => !o);
        if (innerButtonOpen) {
          setInnerButtonOpen(false);
        } else {
          setTimeout(() => setInnerButtonOpen((i) => !i), 250);
        }
      }}
    >
      <img src={img} alt="device operator album cover" />
      <p>{label}</p>
      <StreamContainer
        height={buttonOpen ? 70 : 0}
        innerButtonOpen={innerButtonOpen}
      >
        {innerButtonOpen && (
          <>
            <ClickButtonRow>
              <ClickButton
                color="#1CA0C3"
                onClick={onClickGlobal}
                href={bandcampLink}
                target="_blank"
              >
                Bandcamp
              </ClickButton>
              <ClickButton
                color={LightenDarkenColor("#FF0001", 50)}
                onClick={onClickGlobal}
                href={youtubeLink}
                target="_blank"
              >
                Youtube
              </ClickButton>
              <ClickButton
                color="#1ED760"
                onClick={onClickGlobal}
                href={spotifyLink}
                target="_blank"
              >
                Spotify
              </ClickButton>
            </ClickButtonRow>
            <ClickButtonRow>
              <ClickButton
                color="#FF551A"
                onClick={onClickGlobal}
                href={soundcloudLink}
                target="_blank"
              >
                Soundcloud
              </ClickButton>
              <ClickButton
                color="#F94D65"
                onClick={onClickGlobal}
                href={appleMusicLink}
                target="_blank"
              >
                Apple Music
              </ClickButton>
            </ClickButtonRow>
          </>
        )}
      </StreamContainer>
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  margin-bottom: 20px !important;
`;

const ClickButton = styled.a<{ color: string }>`
  margin: 0;
  padding: 6px 8px;
  border-radius: 50px;
  border: none;
  font-size: 0.8em;
  margin-left: 5px;
  background-color: ${({ color }) => color};
  letter-spacing: -0.05em;
  color: white;
  transition: all 0.3s;
  text-decoration: none;

  &:hover {
    background-color: ${({ color }) => LightenDarkenColor(color, 50)};
    transform: scale(1.05);
  }
`;

const ClickButtonRow = styled.div`
  margin-bottom: 14px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const StreamContainer = styled.div<{
  height: number;
  innerButtonOpen: boolean;
}>`
  transition: all 0.5s;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  ${({ height, innerButtonOpen }) => {
    return css`
      height: ${height}px;
      opacity: ${innerButtonOpen === false ? 0 : 100}%;
      padding-top: ${innerButtonOpen === false ? 0 : 10}px;
    `;
  }}
`;

export default memo(StreamButton);
