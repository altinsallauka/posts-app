function Button(props) {
  const myClass = `button ${props.type}`;
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
