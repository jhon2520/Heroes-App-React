import React from 'react'
import { Route, Routes } from 'react-router'
import DcScreen from '../components/dc/DcScreen'
import HeroScreen from '../components/hero/HeroScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'
import NotFoundScreen from '../components/notFoundScreen/NotFoundScreen'
import SearchScreen from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

const DashBoardRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container">

            <Routes>
                <Route path='marvel' element={<MarvelScreen/>}/>
                <Route path='dc' element={<DcScreen/>}/>
                <Route path='search' element={<SearchScreen/>}/>
                <Route path='hero/:heroeId' element={<HeroScreen/>}/>

                <Route path='/' element={<MarvelScreen/>}/>
                <Route path='*' element={<NotFoundScreen/>}/>
            </Routes>


            </div>
        </>
    )
}

export default DashBoardRoutes