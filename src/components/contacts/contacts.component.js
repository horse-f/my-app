import React from 'react';
import { UsersService } from '../../services/users.service';
import './contacts.component.css';

export class ContactsComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            contacts: UsersService.getContacts()
        };
        console.log('state', this.state);
    }

    render() {
        return (
            <h1>contacts list</h1>
        )
    }
}