import { Search_Recipe } from './Actions';

const initialState={
    recipes:[],
};
const recipesList=[
    {id:1,name:'Chicken kebab'},
    {id:2,name:'Mutton briyani'},
    {id:3,name:'Gulab jamun'},
];


const recipeReducer=(state=initialState,action)=>{
    let newTerm,filterRecipes;
    switch(action.type){
    case Search_Recipe:
        newTerm=action.payload.toLowerCase();
        filterRecipes=recipesList.filter(item=>
            item.name.toLowerCase().includes(newTerm));
        return{
            ...state,
            recipes:filterRecipes,
        };
    default:
        return state;

    }
};

export default recipeReducer;
    

