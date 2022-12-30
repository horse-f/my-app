import React from 'react';
import { UsersService } from '../../services/users.service';
import { runAsyncObservable } from '../../utils';
import ContactsListItemComponent from '../contacts-list-item/contacts-list-item.component';
import OverlayComponent from '../overlay/overlay.component';
import './contacts.component.css';


export class ContactsComponent extends React.Component {
    sub = null;

    constructor() {
        super();
        this.state = {
            contacts: {
                disposition: null,
                data: null
            }
        };
    }

    componentDidMount() {
        this.sub = runAsyncObservable(UsersService.getContacts()).subscribe(
            contactsDataAndDisp => this.setState(({state}) => ({...state, contacts: contactsDataAndDisp}))
        );
    }

    componentWillUnmount() {
        this.sub.unsubscribe();
    }

    render() {
        return (
            <div>
                <h1>contacts list</h1>
                <OverlayComponent disposition={this.state.contacts.disposition}>
                    <ul>
                        {this.state.contacts.data?.map(contact => <ContactsListItemComponent key={contact} user={contact} />)}
                    </ul>
                </OverlayComponent>
            </div>
        )
    }
}