import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import HelloWorld from './hello/HelloWorld';
import TextField from './forms/TextField';
import Fruits from './fruit/Fruits';
import Test from './test/Test';
import Counter from './counter/Counter';
import Events from './events/Events';
import Form from './forms/Form';

//import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
const fruitsArray = [
  'lemon',
  'orange',
  'apple',
  'cccc',
];

root.render(
<React.StrictMode>
  <Test name="walid" />

  <HelloWorld lastname="walid" />

  <TextField inputname="firstname" inputlabel="Firstname" />
  <p>Veuillez entrer votre prénom</p>

  <TextField inputname="lastname" inputlabel="Lastname" />
  <p>Veuillez entrer votre nom</p>

  <div>
    <a
      id="btn"
      className="btn btn-primary"
      href="#"
      role="button"
    >
      Button
    </a>
  </div>

  <Fruits fruits={fruitsArray} />



  <Events />
   <br/>
   <br/>
   <br/>
   
     <Counter initialValue={2} step={3} />
      <br/>
   <br/>
   <br/>
     <Form />
</React.StrictMode>


);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals