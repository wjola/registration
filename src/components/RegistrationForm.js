import FormInput from "./FormInput";
import Button from "./Button";

const RegistrationForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form>
      <div>
        <FormInput type="text" id="name" label="Imię" />
        <FormInput type="password" id="password" label="Hasło" />
      </div>
      <Button text="Zarejestruj" onClick={onSubmit} />
    </form>
  );
}

export default RegistrationForm