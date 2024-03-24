import React from 'react';
import { Link, Outlet } from 'react-router-dom';
export default function ProductsPage(){
    return(
        <div>
            <h2>
                Products page
            </h2>

            <input type='search' placeholder='Search your results'></input>
            <nav>
                <Link to='featured'>Featured</Link>
                <Link to='new'>New</Link>
            </nav>
            <Outlet/>

        </div>
    );
}