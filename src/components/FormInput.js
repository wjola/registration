import { forwardRef } from "react";

const FormInput = forwardRef(({ type, id, label}, ref) => {  
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} type={type} id={id} />
    </>
  );
});

export default FormInput;