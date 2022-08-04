import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile'
                            render={ () => <Profile state={props.state.profilePage}/>} />
                        <Route path='/dialogs'
                            render={ () => <Dialogs state={props.state.dialogsPage}/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
