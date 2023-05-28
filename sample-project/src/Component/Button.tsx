interface Props {
  name: String;
}

function Button(props: Props) {
  const handleButton = () => alert("Button Clicked !!");
  return (
    <button type="button" className="btn btn-primary" onClick={handleButton}>
      {props.name}
    </button>
  );
}
export default Button;
