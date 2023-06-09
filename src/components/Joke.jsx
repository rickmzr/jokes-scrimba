export default function Joke(props) {
  return (
    <div className="joke-container">
      {props.setup && <h3>{props.setup}</h3>}
      <p>{props.punchline}</p>
      <hr />
    </div>
  );
}
