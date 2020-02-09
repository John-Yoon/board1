import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Heroes} from "./pages/Heroes";
import {Scoreboard} from "./pages/Scoreboard";
import {FilterableProductTable} from "./pages/FilterableProductTable";
import {Menu} from "./Menu";


export const Root = (props) => {
    return (
        <BrowserRouter>
            <Menu></Menu>
            <div className="container" style={{backgroundColor: '#CCCCCC'}}>
                <Route path="/" exact component={Home}></Route>
                <Route path="/heroes" component={Heroes}></Route>
                <Route path="/scoreboard" component={Scoreboard}></Route>
                <Route path="/product" component={FilterableProductTable}></Route>
            </div>
        </BrowserRouter>
    );
}