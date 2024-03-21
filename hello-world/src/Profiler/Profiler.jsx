import React from 'react'
import { Profiler } from "react";
import Form from "./Form";
 
const callback = (
    id,
    phase,
    actualDuration,
    startTime,
    baseDuration,
    commitTime,
    interactions
) => {
    console.log(
        "id " +
            id +
            " startTime " +
            startTime +
            " actualDuration " +
            actualDuration +
            " baseDuration " +
            baseDuration +
            " commitTime " +
            commitTime +
            " phase " +
            phase +
            " interactions " +
            interactions
    );
};
 
export default function Profile() {
    return (
        <div className="App">
            <Profiler id="Name" onRender={callback}>
                <Form labelname="Name " />
            </Profiler>
        </div>
    );
}
 
