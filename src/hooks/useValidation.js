const useValidation = () => {
  const isNonEmpty = (fieldText) => {
    return !!fieldText.trim().length;
  }

  const isValidEmail = (email) => {
    const atRegexp = /^[^@]*@{1}[^@]*$/;
    const dotRegexp = /\./;
    return atRegexp.test(email) && dotRegexp.test(email);
  }
  return { isNonEmpty, isValidEmail };
}

export default useValidation;