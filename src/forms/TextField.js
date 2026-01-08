import { Component } from "react";

/*export default function TextField({children,inputlabel,inputname}){

    return (
         <>
        <div> </div>
        <label>{inputlabel}</label>
        <input name={inputname}  type='text'/>
       <div>{children}</div>
      </>
    )
       
}*/
export default class TextField extends Component{
  render(){
    return <>
 
        <label>{this.props.inputlabel}</label>
        <input name={this.props.inputname}  type='text'/>
       <div>{this.props.children}</div>

    </>
  }
}