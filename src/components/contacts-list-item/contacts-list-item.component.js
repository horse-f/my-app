import React, { useState } from "react";
import './contacts-list-item.component.css';

export default function ContactsListItemComponent({user}) {
    console.log('user',user);
    return <li>{user}</li>;
}

// export default class ContactsListItemComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             user: props.user
//         }
//     }

//     render() {
//         return (
//             <li>{this.state.user}</li>
//         )
//     }
// }