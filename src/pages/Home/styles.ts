import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:focus {
    box-shadow: none;
  }

`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  color: ${(props) => props.theme["red-400"]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme["red-500"]};
    color: ${(props) => props.theme["white"]};
  }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
color: ${(props) => props.theme["red-400"]};
  
  &:not(:disabled):hover {
    background: ${(props) => props.theme["red-700"]};
    color: ${(props) => props.theme["white"]};
  }
`;
