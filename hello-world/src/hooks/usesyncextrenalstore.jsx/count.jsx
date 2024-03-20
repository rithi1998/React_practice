let count =0;
let subscribers=new Set();// to store callback function

const countSet={
    read(){
        return count;//snapshot method
    },

    //add callback to the subscribers set and return a method to unsubscribe fro the store

    subscribe(callback){
        subscribers.add(callback);
        return ()=> subscribers.delete(callback);
    },
    increment(){
        count++;
        subscribers.forEach((callback)=>callback());
    },

    decrement(){
        count--;
        subscribers.forEach((callback)=>callback());
    },
}

export default countSet
