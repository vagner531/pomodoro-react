import { FormContainer, MinutesAmountInpunt, TaskInput } from "./styles";
import { useContext } from "react";

import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../contexts/CyclesContext";


export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return(
    <FormContainer>
    <label htmlFor="task">Vou trabalhar em</label>
    <TaskInput
      id="task"
      list="task-suggestions"
      placeholder="Dê um nome para o seu projeto"
      disabled={!!activeCycle}
      {...register("task")}
    />

    <datalist id="task-suggestions">
      <option value="Projeto 1" />
    </datalist>

    <label htmlFor="minutesAmount">durante</label>
    <MinutesAmountInpunt
      type="number"
      id="minutesAmount"
      placeholder="00"
      step={0}
      disabled={!!activeCycle}
      {...register("minutesAmount", { valueAsNumber: true })}
    />

    <span>minutos.</span>
  </FormContainer>
  )
}