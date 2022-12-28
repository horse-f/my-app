import React from 'react';
import { UsersService } from '../../services/users.service';
import ContactsListItemComponent from '../contacts-list-item/contacts-list-item.component';
import './contacts.component.css';

export class ContactsComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            contacts: UsersService.getContacts()
        };
    }

    render() {
        return (
            <div>
                <h1>contacts list</h1>
                <ul>
                    {this.state.contacts.map(contact => <ContactsListItemComponent user={contact} />)}
                </ul>
            </div>
        )
    }
}