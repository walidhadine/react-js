
export default function HelloWorld({ lastname }) {
  const age = 20;

  return (
    <h1>
      Hello {lastname} {age > 18 ? 'adult' : 'minor'}
    </h1>
  );
}

/*import {Component} from "react";
export default class HelloWorld extends Component{
age = 13
render (){
      const { lastname , age }= this.props
 return 
   <>
    <h1>
      Hello {lastname} {age > 18 ? 'adult' : 'minor'}
    </h1>
    </>    }
}*/