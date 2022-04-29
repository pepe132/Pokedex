import React from 'react'

export const PokemonCard = ({pokemons,loading,info}) => {
   
    return (
        <>
        {
            (loading) ? <h1>loading</h1>
            : pokemons.map((item)=>{
                return(
                    <>
                        <div className='card' key={item.id} onClick={()=>info(item)}>
                            <h2>{item.id}</h2>
                            <img src={item.sprites.front_default}/>
                            <h2>{item.name}</h2>

                        </div>
                    </>
                )
            })
        }
        </>
    )
}
