import React,{useState,useEffect} from 'react';
import createConnection from './Chat';
import PropTypes from 'prop-types';
export default function EffectHook(){
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log(`You have clicked ${count} times`);
    },[count]);

    return(
        <>
        
            <button onClick={()=>setCount((prevCount)=>prevCount+1)}>
            Clicked {count} times</button>
        
        </>
    );
}

function ChatRoom({roomId}){
    const [serverUrl,setServerUrl]=useState('https://localhost:1234');
    useEffect(()=>{
        const connection=createConnection(serverUrl,roomId);
        connection.connect();
        return ()=>{
            connection.disconnect();

        };

    },[roomId,serverUrl]);
    return(
        <>
            <label>
            Server URL:{' '}
                <input
                    value={serverUrl}
                    onChange={e => setServerUrl(e.target.value)}/>
            </label>
            <h2>Welcome to the {roomId} room</h2>
    
        </>
    );
}

ChatRoom.propTypes={
    roomId:PropTypes.number
};

export function EffectHookOne(){
    const [roomId,setRoomId]=useState('general');
    const [show,setShow]=useState(false);
    return(
        <>
            <label>
            Choose the chat room:{' '}
                <select
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>


                </select>
            </label>
            <button onClick={()=>setShow(!show)}>
                {show ? 'Close chat':'Open chat'}
            </button>
            {show && <hr/>}
            {show && <ChatRoom roomId={roomId}/>}
        </>
    );
}