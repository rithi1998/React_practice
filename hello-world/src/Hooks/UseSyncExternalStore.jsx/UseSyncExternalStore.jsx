import React,{useSyncExternalStore} from 'react';
import countSet from './Count';

export default function SyncExternalStoreHook(){
    const count=useSyncExternalStore(countSet.subscribe,countSet.read);
    return(
        <div>
            count:{count}<br/><br/>
            <button onClick={countSet.increment}>Increment</button><br/><br/>
            <button onClick={countSet.decrement}>Decrement</button>
        </div>

    );
    
}

