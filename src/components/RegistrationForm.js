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
  const { isNonEmpty, isValidEmail } = useValidation();

  const validateForm = () => {
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    
    const mandatoryValidationResult = isNonEmpty(name) && isNonEmpty(password);
    if (isNewsletterConsent) {
      const email = emailRef.current.value;
      const emailValidationResult = isValidEmail(email);
      const validationResult = mandatoryValidationResult && emailValidationResult;
      setIsValidationSuccessful(validationResult);
      setIsValidationError(!validationResult);

      return;
    }
    setIsValidationSuccessful(mandatoryValidationResult);
    setIsValidationError(!mandatoryValidationResult);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    validateForm();
  }

  const onNewsletterConsentChange = () => {
    setIsNewsletterConsent(prev => !prev);
  }

  const resetFormFields = () => {
    nameRef.current.value = '';
    passwordRef.current.value = '';
    setIsNewsletterConsent(false);
  }

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    if (isValidationSuccessful) {
      resetFormFields();
    }
  }, [isValidationSuccessful]);

  return (
    <form onSubmit={onSubmit}>
      <div>
        <FormInput ref={nameRef} type="text" id="name" label="Imie" />
        <FormInput
          ref={passwordRef}
          type="password"
          id="password"
          label="Haslo"
        />
        <NewsletterConsent
          isChecked={isNewsletterConsent}
          onChange={onNewsletterConsentChange}
        />
      </div>
      {isNewsletterConsent &&
        <FormInput
          ref={emailRef}
          type="text"
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