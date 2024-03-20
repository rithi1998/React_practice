import { useState,useTransition } from "react";

const [isPending,startTransition]=useTransition()


export function AboutTab(){
    return(
        <h1>Welcome to the new cafetaria</h1>
    )
}