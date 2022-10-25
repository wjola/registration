const Button = ({ text, onClick, type = 'button' }) => {
  const handleOnClick = () => {
    onClick && onClick();
  }

  return (
    <button
      type={type}
      onClick={handleOnClick}
    >
      {text}
    </button>);
}

export default Button;