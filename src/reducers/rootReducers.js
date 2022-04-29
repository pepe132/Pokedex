import { combineReducers } from "redux";
import { pokemonsReducers } from "./pokemonsReducers";

export const rootReducers=combineReducers({
    pokemon:pokemonsReducers,
   
})