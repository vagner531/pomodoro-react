import { FormContainer, MinutesAmountInpunt, TaskInput } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no minimo 5 minutos")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

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