import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

export function Form({ submitPerson, persons }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    submitPerson([...persons, data]);
    reset(); // Näin ei missään nimessä saisi tehdä
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label>Nimi: </label>
      <input {...register("name")} />
      <br></br>

      <label>Ikä: </label>
      <input {...register("age", { required: true })} />
      {errors.age && <p>Kenttä on pakollinen</p>}
      <br></br>

      <label>Sähöposti: </label>
      <input {...register("email")} />
      <br></br>
      <input type="submit" />
    </FormContainer>
  );
}

const FormContainer = styled.form({
  padding: 10
});
