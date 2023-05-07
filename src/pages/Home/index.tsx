import { Play } from "phosphor-react"
import { CoutdowContainer, FormContainer, HomeContainer, MinutesAmountInpunt, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
       <FormContainer>
       <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput id="task" list="task-suggestions" placeholder="Dê um nome para o seu projeto"/>

        <datalist id="task-suggestions">
          <option value="Projeto 1" />
        </datalist>

        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmountInpunt type="number" id="minutesAmount" placeholder="00" step={0} />

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
