import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { findRecipe } from './Actions';

const RecipeFinder=()=>{
    const [query,setQuery]=useState('');
    const recipes=useSelector(state => state.recipe.recipes);
    const dispatch=useDispatch();

    const SearchRecipe=()=>{
        dispatch(findRecipe(query));
    };

    return(
        <>
            <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)}></input>

            <button onClick={SearchRecipe}>Search</button>

            <ul>
                {recipes.map(recipe=>(
                    <li key={recipe.id}>{recipe.name}</li>
                ))}
            </ul>
        </>
    );
};

export default RecipeFinder;