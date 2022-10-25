import { useState, useRef } from 'react';
import FormInput from "./FormInput";
import Button from "./Button";
import FormInfo from './FormInfo';
import useValidation from '../hooks/useValidation';

const RegistrationForm = () => {
  const [isValidationSuccessful, setIsValidationSuccessful] = useState(false);
  const [isValidationError, setIsValidationError] = useState(false);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const { isNonEmpty } = useValidation();

  const validateForm = () => {
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    
    const validationResult = isNonEmpty(name) && isNonEmpty(password);
    setIsValidationSuccessful(validationResult);
    setIsValidationError(!validationResult);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    validateForm();
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <FormInput ref={nameRef} type="text" id="name" label="Imię" />
        <FormInput
          ref={passwordRef}
          type="password"
          id="password"
          label="Hasło"
        />
      </div>
      <button type="submit">Zarejestruj</button>
      {isValidationSuccessful && <FormInfo message="Pomyślna rejestracja" />}
      {isValidationError && <FormInfo message="Błąd walidacji" />}
    </form>
  );
}

export default RegistrationForm