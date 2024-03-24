import React,{useState,createContext,useContext} from 'react';
import PropTypes from 'prop-types';
const ThemeContext=createContext(null);

export default function ContextHook(){
    const[theme,setTheme]=useState('light');

    const toggleTheme=()=>{
        console.log('Function calling');
        setTheme(prevTheme=>(prevTheme==='light'?'dark':'light'));
    };
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <Form/>
            <label>
                <input type="checkbox"
                    checked={theme==='dark'}
                    onChange={toggleTheme}/> 

        Use dark mode       
            </label>
        </ThemeContext.Provider>
    );
}

function Form(){
    return(
        <Panel title="Welcome">
            <Button>Sign up</Button>
            <Button>Login</Button>

        </Panel>
    );
}

function Panel({title,children}){
    const {theme}=useContext(ThemeContext);
    const className='panel-'+theme;
    return(
        <section className={className}>
            <h1>
                {title}
            </h1>
            {children}
        </section>
    );
}

Panel.propTypes={
    title:PropTypes.string,
    children:PropTypes.node
};

function Button({children}){
    const {theme}=useContext(ThemeContext);
    const className='button-'+theme;//dynamically generate classname based on theme
    return(
        <button className={className}>
            {children}
        </button>
    );
}

Button.propTypes={
    children:PropTypes.node
};