import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { PokedexScreen } from '../components/PokedexScreen';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

        <Routes>

            <Route index path="/" element={<PokedexScreen />}/>

        </Routes>

    </BrowserRouter>


      </>    
  )
}
