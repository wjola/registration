import { useRef } from 'react';
import FormInput from "./FormInput";
import Button from "./Button";
import useValidation from '../hooks/useValidation';

const RegistrationForm = () => {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const { isNonEmpty } = useValidation();

  const validateForm = () => {
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    
    return isNonEmpty(name) && isNonEmpty(password);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(validateForm());
  }

  return (
    <form>
      <div>
        <FormInput ref={nameRef} type="text" id="name" label="Imię" />
        <FormInput
          ref={passwordRef}
          type="password"
          id="password"
          label="Hasło"
        />
      </div>
      <Button text="Zarejestruj" onClick={onSubmit} />
    </form>
  );
}

export default RegistrationForm