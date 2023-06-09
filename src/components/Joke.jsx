export default function Joke(props) {
  return (
    <div className="joke-container">
      <p>{props.setup}</p>
      <p>{props.punchline}</p>
    </div>
  );
}
