export function Goal(props) {
    const isGoal = props.gif;
    if (isGoal) {
      return <p>Hello</p>;
    }
    return <h1>Salam</h1>;
}