const useValidation = () => {
  const isNonEmpty = (fieldText) => {
    return !!fieldText.trim().length;
  }
  return { isNonEmpty };
}

export default useValidation;