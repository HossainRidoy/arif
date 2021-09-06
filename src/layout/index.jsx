import React from 'react';
// Components
import Header from './header';
import Fotter from './footer';
import Headertop from "../components/header-top"



const Layout = (props) => {
    return (
        <>
            <Header />
            <Headertop/>
            {props.children}
            <Fotter />
        </>
    );
};
export default Layout;