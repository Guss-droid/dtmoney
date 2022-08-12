import styled from "styled-components";
import { darken, transparentize } from "polished";

interface IRadioBox {
  isActive: boolean;
  activeColor: "greenButton" | "redButton";
}

const colors = {
  greenButton: "#33CC95",
  redButton: "#E52E40"
}

export const Container = styled.form`
  h2 {
    color: ${props => props.theme["gray-100"]};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 1rem;
    height: 4rem;
    border-radius: 6px;
    background: ${props => props.theme["gray-900"]};
    color: ${props => props.theme["gray-300"]};
    border: 0;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: ${props => props.theme["gray-500"]}
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 3.5rem;
    padding: 0 1.25rem;
    background: ${props => props.theme["green-500"]};
    color: ${props => props.theme.white};
    border-radius: 6px;
    border: 0;
    margin-top: 1.5rem;
    font-weight: bold;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

export const RadioBox = styled.button<IRadioBox>`
  height: 4rem;
  border: 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.isActive ?
    transparentize(0.8, colors[props.activeColor])
    : props.theme["gray-700"]};
  transition: border-color 0.2s;

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: ${props => props.theme["gray-100"]};
    }


    &:hover {
      border-color: ${darken(0.1, "#D7D7D7")};
    }
`

export const ModalContainer = styled.div`
  background: ${props => props.theme["gray-800"]};
`