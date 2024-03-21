import { useState,useTransition } from "react";
import TabButton from "./tabbutton";
import AboutTab from "./about";
import PostsTab from "./post";
import Contact from "./contact";

export default function TransitionHook(){
    const[isPending,startTransition]=useTransition();
    const[tab,setTab]=useState('about');
    function selectTab(nextTab){
        startTransition(()=>{
            setTab(nextTab);
        });
    }

    return(
        <>
        <TabButton 
        isActive={tab==='about'}
        onClick={()=>selectTab('about')}>About</TabButton>

        <TabButton
        isActive={tab==='posts'}
        onClick={()=>selectTab('posts')}>Posts(slow)</TabButton>

        <TabButton isActive={tab==='contact'}
        onClick={()=>selectTab('contact')}>Contact</TabButton>

        <hr/>
        {tab ==='about'&&<AboutTab/>}
        {tab==='posts'&&<PostsTab/>}
        {tab==='contact' && <Contact/>}
        </>
    );


}




