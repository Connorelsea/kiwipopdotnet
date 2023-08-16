import { styled } from "styled-components";

const Button = styled.button`
  width: 100%;
  border: none;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    103deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(209, 255, 192, 1) 100%
  );
  padding: 17px 20px;
  border-radius: 40px;
  color: #2d7800;
  font-size: 1em;
  position: relative;
  transition: all 0.5s;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08), 0 3px 10px rgba(0, 0, 0, 0.15);

  > p {
    margin: 0;
    padding: 0;
    align-self: flex-end;
    text-shadow: 3px 2px 3px rgba(255, 255, 255, 0.2);
  }

  > img {
    position: absolute;
    top: -105px;
    left: -140px;
    transform: scale(0.35);
    transition: all 0.3s;
  }

  &:hover {
    > img {
      transform: scale(0.42);
    }

    transform: scale(1.03);
    /* transform: scale(1.03); */
    background-color: #c1ffab;
    z-index: 1;
  }
`;

export const ButtonLink = styled.a`
  border: none;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    103deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(209, 255, 192, 1) 100%
  );
  padding: 17px 20px;
  border-radius: 40px;
  color: #2d7800;
  font-size: 1em;
  position: relative;
  transition: all 0.5s;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08), 0 3px 10px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  text-align: center;

  > p {
    margin: 0;
    padding: 0;
    align-self: flex-end;
  }

  > img {
    position: absolute;
    top: -105px;
    left: -140px;
    transform: scale(0.35);
    transition: all 0.3s;
  }

  &:hover {
    > img {
      transform: scale(0.42);
    }

    transform: scale(1.03);
    /* transform: scale(1.03); */
    background-color: #c1ffab;
    z-index: 1;
  }
`;

export default Button;
