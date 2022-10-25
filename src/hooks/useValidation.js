const useValidation = () => {
  const isNonEmpty = (fieldText) => {
    return !!fieldText.trim().length;
  }

  const isValidEmail = (email) => {
    const regexp = /.+@.+\..+/;
    return regexp.test(email);
  }
  return { isNonEmpty, isValidEmail };
}

export default useValidation;