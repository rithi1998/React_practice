import logo from './logo.svg';
import React from 'react'
import { useState } from 'react';
import './App.css';
import Greet,{Welcome} from './FunctionalComponents'
import Define, { NewComponent }from './ClassComponents'
import {LifeMethod} from './ClassComponents'
import Hello,{NewEvent} from './Events'
import FirstEvent,{NewClick }from './Events';
import MouseEvents from './Events';
import Render from './ConditionalRendering'
import {List} from './Lists'
import NewClass,{NewFunction} from './State';
import NewProp,{Detail} from './Props';
import DidUpdate from './Updating';
import Example from './Mounting';
import NewApp from './bind';
import Parent from './LiftStateUp';
import FirstBind from './bind';
import NewLift from './Lift';
import NewForm from './Forms';
import UncontrolForm from './UncontrolledForms';
import LazyComponent from './CodeSplitting';
import UserInput from './ForwardingRef/ParentInput';
import NewFragment from './Fragments';
import ClickCount from './HOC/ClickCount';
import Context from './Context/Context';
import ErrorBoundary from './ErrorBoundary';
import ErrorOccur from './ErrorOccur';
import BluePicker from './JsxDotnotation';
import { NewPortal } from './Portal';
import CreateElement from './withoutJsx';
const customer= {
  name: "Rithika",
  url:"https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90

};
// React.createElement(
//   MyButton,
//   {color:'blue'},
//   'Click here'
// )

export default function App() {
  
  return (
    <div>
      {/* <Greet/>

      <Welcome greet="Good morning"/>

      <Define/>
      <NewComponent/>
      <LifeMethod favcol="Red"/>
      <Hello/> */}

       {/* <NewEvent customer={customer}/>
    <FirstEvent></FirstEvent>
    <NewClick/> */}
    {/* <MouseEvents/> */}
    {/* <Render/>
    <List/>  */}

    {/* <NewClass/><hr/>
    <NewFunction/> */}
    {/* <NewProp email="rithi@gmail.com"
    details={{address:"Chennai",mobile:"85673858223"}}/> */}
    {/* <Detail name="Ragu"/> */}
    {/* <Login/> */}
    {/* <Example/> */}
    {/* <DidUpdate/> */}
    {/* <NewApp/> */}

    {/* <Parent/> */}
    {/* <FirstBind/> */}
    {/* <NewLift/> */}

    {/* <NewForm/> */}
    {/* <UncontrolForm/> */}

    {/* <LazyComponent/> */}
    {/* <UserInput/> */}

    {/* <NewFragment/> */}
    {/* <ClickCount name='Rithika'/> */}
    {/* <Context/> */}
    {/* <ErrorBoundary>
      <ErrorOccur/>
    </ErrorBoundary> */}
    {/* <BluePicker/> */}
    {/* {<NewPortal/>} */}
    <CreateElement/>
    
    </div>
  );
}

;
