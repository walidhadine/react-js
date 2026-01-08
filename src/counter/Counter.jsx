import React, { Component, useState } from "react";

/*export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: -100,
      date: undefined,
    };
  }

  componentDidMount() {
    // On utilise setInterval pour incrémenter le compteur chaque seconde
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        console.log(prevState);
        return { counter: prevState.counter + 1 };
      });
    }, 1000);
  }
  componentWillUnmount() {
    // Toujours nettoyer les intervalles pour éviter les fuites mémoire
    clearInterval(this.interval);
  }
  render() {
    return <div>Il y a {this.state.counter} secondes</div>;
  }
}*/
export default function Counter({initialValue,step}) {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <span>
        <button onClick={() =>{
          setCount(prevState => {
            console.log(prevState)
            return prevState + step
          })
        }}>Click to increlent!!</button>
  <button onClick={ () => {
    setCount(0)


  }}>Reset!!</button>
        Il y a {count} secondes
        </span>
    </div>
  );
}
