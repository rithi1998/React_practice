export const Search_Recipe='Search_Recipe';

export const findRecipe=(query)=>({
    type:Search_Recipe,
    payload:query
});