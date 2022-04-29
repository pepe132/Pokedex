import { types } from "../types/types";

export const getAllPokemons = () => {
    return async(dispatch)=>{

        try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        const body = await resp.json()

        body.results.forEach(async(item,key)=>{
            const respuesta= await fetch(`https://pokeapi.co/api/v2/pokemon/${key+1}`)
            const data=await respuesta.json()
            console.log(data);

            dispatch(AllPokemonsconst(data))

        })
            
        } catch (error) {
            console.log(error);
            
        }
        
    }

    
}

const AllPokemonsconst = ( pokemons ) => ({
    type: types.pokemonsLoaded,
    payload: pokemons
})

