import React, { Component } from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Dialogs = (props) => {

    let daialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = props.state.messages.map( m => <Message message={m.message} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { daialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;
