import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;

  div {
    background: ${props => props.theme["gray-600"]};
    padding: 2rem;
    border-radius: 6px;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${props => props.theme["gray-300"]};
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
    }

    &.total {
      background: ${props => props.theme["green-700"]};
      color: #FFF;
    }
  }
`