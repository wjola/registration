import { useState, useRef, useEffect } from 'react';
import FormInput from "./FormInput";
import FormInfo from './FormInfo';
import NewsletterConsent from './NewsletterConsent';
import useValidation from '../hooks/useValidation';

const RegistrationForm = () => {
  const [isValidationSuccessful, setIsValidationSuccessful] = useState(false);
  const [isValidationError, setIsValidationError] = useState(false);
  const [isNewsletterConsent, setIsNewsletterConsent] = useState(false);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
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

  const onNewsletterConsentChange = () => {
    setIsNewsletterConsent(prev => !prev);
  }

  useEffect(() => {
    nameRef.current.focus();
  }, []);

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
        <NewsletterConsent
          isChecked={isNewsletterConsent}
          onChange={onNewsletterConsentChange}
        />
      </div>
      {isNewsletterConsent &&
        <FormInput
          ref={emailRef}
          type="email"
          id="email"
          label="Email"
        />
      }
      <button type="submit">Zarejestruj</button>
      {isValidationSuccessful && <FormInfo message="Pomyślna rejestracja" />}
      {isValidationError && <FormInfo message="Błąd walidacji" />}
      
    </form>
  );
}

export default RegistrationForm