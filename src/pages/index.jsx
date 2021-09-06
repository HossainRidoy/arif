import React, { useEffect } from 'react'
import About from './about'
import Contacts from './contacts'
import Map from './map'
import Services from './services'
import Slide from './slide'



const Pages = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Slide />
            <About />
            <Services />
            <Map />
            <Contacts />
        </>
    )
}

export default Pages
