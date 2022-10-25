import FormInput from "./FormInput";

const RegistrationForm = () => {
  return (
    <form>
      <FormInput type="text" id="name" label="Imię" />
      <FormInput type="password" id="password" label="Hasło" />
    </form>
  );
}

export default RegistrationForm