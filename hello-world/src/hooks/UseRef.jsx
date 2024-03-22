import React, { useState, useRef } from 'react';

export default function RefHook() {
    const [clickCount, setClickCount] = useState(0);
    const firstRef = useRef(0);

    function handleClick() {
        firstRef.current = firstRef.current + 1;
        setClickCount(clickCount + 1); // Trigger re-render by updating state
    }

    return (
        <>
            <button onClick={handleClick}>You have clicked {firstRef.current} times</button>
            {/* <h1>You have clicked {ref.current} times</h1> */}
        </>
    );
}