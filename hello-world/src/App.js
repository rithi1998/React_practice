import logo from './logo.svg';
import React, { Profiler } from 'react'
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
import NewApp from './Bind';
import Parent from './LiftStateUp';
import FirstBind from './Bind';
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
import BluePicker from './jsxindepth';
import { NewPortal } from './portal';
import CreateElement from './withoutJsx';
import NewRef from './ref';
import NewState, { FirstRef } from './refandstate';
import StateHook, { ArrayState, ObjectState, PreviousState } from './hooks/UseState';
import Age from './hooks/UseReducer';
import IncrementAge from './hooks/UseReducer';
import ContextHook from './hooks/UseContext';
import RefHook from './hooks/UseRef';
import EffectHook, { EffectHookOne } from './hooks/UseEffect/UseEffect';
import FilterItems from './hooks/UseMemo';
import UseUser from './hooks/UseDebugValue';
import MemoHook from './hooks/UseMemo';
import CallbackHook from './hooks/UseCallback/UseCallback';
import SyncExternalStoreHook from './hooks/UseSyncExternalStore.jsx/UseSyncExternalStore';
import TransitionHook from './hooks/UseTransition/UseTransition';
import IdHook from './hooks/UseId';
import Profile from './Profiler/Profiler';
import PropTypeOne from './proptypes';

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
    {/* <Profile/> */}
    <PropTypeOne name='Rithika'/>
    {/* <CreateElement/> */}
    {/* <NewRef/> */}
    {/* <NewState/>
    <FirstRef/> */}
    {/* <StateHook/> */}
    {/* <PreviousState/> */}
    {/* <ObjectState/> */}
    {/* <ArrayState/> */}
    {/* <Age/> */}
    {/* <IncrementAge/> */}
    {/* <ContextHook/> */}
    {/* <RefHook/> */}
    {/* <EffectHook/> */}
    {/* <FilterItems/> */}
    {/* <UseUser/> */}
    {/* <MemoHook/> */}
    {/* <CallbackHook/> */}
    {/* <SyncExternalStoreHook/> */}
    {/* <TransitionHook/> */}
    {/* <IdHook/> */}
    {/* <EffectHookOne/> */}

    </div>
  );
}


