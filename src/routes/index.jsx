import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Certificate from '../components/certificate';
import Layout from '../layout';
import Pages from '../pages';

const Roudes = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Pages}/>
                    <Route path="/certificate" exact component={Certificate}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};
export default Roudes;