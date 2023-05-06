import { Play } from "phosphor-react"
import { CoutdowContainer, FormContainer, HomeContainer, Separator, StartCountdownButton } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
       <FormContainer>
       <label htmlFor="task">Vou trabalhar em</label>
        <input id="task" />

        <label htmlFor="minutesAmount">durante</label>
        <input type="number" id="minutesAmount" />

        <span>minutos.</span>
       </FormContainer>

        <CoutdowContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CoutdowContainer>
        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
