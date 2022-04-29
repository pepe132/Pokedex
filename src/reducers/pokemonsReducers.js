import { types } from "../types/types";

const initialState={
    pokemons:{}
}


export const pokemonsReducers = (state=initialState,action) => {
    
    switch (action.type) {
        case types.pokemonsLoaded:
            return{
                ...state,
                pokemons:{...action.payload}
            }
        
        default:
            return state;
    }
}