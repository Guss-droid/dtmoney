import styled from "styled-components"
 
export const Container = styled.header`
  background: ${props => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`

export const Content = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-weight: bold;
    color: #FFF;
    background: ${props => props.theme["green-500"]};
    border: 0;
    padding: 0 1.25rem;
    border-radius: 6px;
    height: 3.125rem;
    transition: filter 0.5s;

    &:hover{
      filter: brightness(0.8);
    }
  }
`