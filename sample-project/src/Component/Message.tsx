interface Props {
  text: string;
}
function Message(props: Props) {
  const name = "Rachit";

  return <h4>{props.text} </h4>;
}

export default Message;
