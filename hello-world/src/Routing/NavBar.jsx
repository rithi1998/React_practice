import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavigationBar(){

    const NavStyles=({isActive})=>{
        return{
            fontWeight:isActive?'bold':'normal',
            textDecoration:isActive? 'none':'underline'

        };
    };

    //Link component can be used to navigate between two pages using elements
    //NavLink component used to apply styles
    return(
        <nav className='firstnav'>
            <NavLink style={NavStyles} to='/'>Home</NavLink>
            <NavLink style={NavStyles} to='/about'>About</NavLink>
            <NavLink style={NavStyles}to='/products'>Products</NavLink>
        </nav>

        
    );
}