import React from 'react'
import { Header } from './Header'
import { Outlet, useNavigation } from 'react-router-dom'
import { Loader } from './Loader'


export const MainLayout = () => {

    const loading = useNavigation()
    //console.log(loading.state)
    
    return (
        <>

            <Header></Header>
            {loading.state == "loading" ?<Loader />:"" }
            <Outlet></Outlet>
        </>

    )
}
