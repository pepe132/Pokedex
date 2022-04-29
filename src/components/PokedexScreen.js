import React, { useEffect, useState } from 'react'
import { PokemonCard } from './PokemonCard'
import { PokemonInfo } from './PokemonInfo'


export const PokedexScreen = () => {

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=20")
  const [siguiente, setSiguiente] = useState(null)
  const [atras, setAtras] = useState(null)

  const [pokeBody, setPokeBody] = useState()

  const getAllPokemons=async()=>{
    setLoading(true)
    const res=await fetch(url)
    const data=await res.json()
    setSiguiente(data.next)
    setAtras(data.previous)
    getPokemons(data.results)
    setLoading(false)

  }

  const getPokemons=async(pok)=>{
    pok.map(async(item)=>{
      const result=await fetch(item.url)
      const datat=await result.json();
      setPokemons(state=>{
        state=[...state,datat]
        return state;
      })
    })
  }

  useEffect(() => {

    getAllPokemons()
    
  }, [url])
  
  

  return (
    <div className='container'>
      <div className='left-content'>
        <PokemonCard pokemons={pokemons} loading={loading} info={poke=>setPokeBody(poke)}/>

        <div className='btn-group'>
          
          <button onClick={()=>{
            setUrl(atras)
          }}>Previo</button>

          <button onClick={()=>{
            setUrl(siguiente)
          }}>Siguiente</button>

        </div>
        

      </div>
      <div className='right-content'>
      <PokemonInfo data={pokeBody}/>

      </div>
    </div>
  )
}
