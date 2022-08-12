import styled from "styled-components";

export const Container = styled.div`
  margin: 4rem auto 1rem;
  width: 100%;
  max-width: 1120px;
  padding: 0 1.5rem;
  
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    th {
      color: ${props => props.theme["gray-300"]};
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1.25rem 2rem;
      border: 0;
      background: ${props => props.theme["gray-700"]};

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }

      &.deposit {
        color: ${props => props.theme["green-300"]};
      }

      &.withdraw {
        color: ${props => props.theme["red-300"]};
      }      
    }
  }
`