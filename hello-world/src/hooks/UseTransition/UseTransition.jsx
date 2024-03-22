import { useState,useTransition } from "react";
import TabButton from "./TabButton";
import AboutTab from "./About";
import PostsTab from "./Post";
import Contact from "./Contact";

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




