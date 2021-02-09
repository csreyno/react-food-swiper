import React from "react";
import { useForm } from "react-hook-form";

export default function RecipeForm(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formdata) => {
    console.log(formdata);
  };

  return (
    <section>
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register} type="file" name="picture" />
        <button>Create</button>
      </form>
    </section>
  );
}
