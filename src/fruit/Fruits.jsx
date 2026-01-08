
export default function Fruits({ fruits }) {
  const displayFruits = () => {
    return fruits.map((fruit => <li>{fruit}</li>
    ));
  };
  return (
    <>
      <h1 className='h1'>Fruits</h1>
      <ul>
        {displayFruits()}
      </ul>
    </>
  );
}
/*import { Component } from "react";
export default class Fruit extends Component{
    render(){
        return (
                  <>
                  <h1>Fruit</h1>
    <ul>
       <li>lemon </li>
        <li>orange</li>
        <li>apple</li>
        <li>banans</li>
    </ul>
    </>
        )
  
    }
}*/