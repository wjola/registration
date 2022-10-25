import { forwardRef } from "react";

const FormInput = forwardRef(({ type, id, label}, ref) => {  
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} type={type} id={id} />
    </div>
  );
});

export default FormInput;