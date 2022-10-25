const FormInput = ({ type, id, label }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </>
  );
}

export default FormInput;