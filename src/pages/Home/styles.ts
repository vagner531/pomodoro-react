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
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['white']};
  font-size:  1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`;
const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  /* border-bottom: 2px solid ${(props) => props.theme['gray-300']}; */
  font-weight: bold;
  font-size: 1rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['red-500']};


  &::placeholder{
    color: ${(props) => props.theme['red-500']};
  }

  &:focus {
    box-shadow: none;
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;
`;

export const MinutesAmountInpunt = styled(BaseInput)`
  width: 4rem;
`

export const CoutdowContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['white']};

  display: flex;
  gap: 1rem;

  span {
    background: rgb(255 255 255 / 17%);
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['white']}; 

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const StartCountdownButton = styled.button`
  width:100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  color: ${(props) => props.theme['red-400']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover{
    background: ${(props) => props.theme['red-500']};
    color: ${(props) => props.theme['white']}
  }
`;