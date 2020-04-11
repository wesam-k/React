import React from 'react';


function FriendProfile(props){
    return(
        <div>
            <ul>
            <li>firstName: {props.first}</li>
            <li>lastName : {props.last}</li>
            <li>street: {props.street}</li>
            <li>postcode: {props.postcode}</li>
            <li>city: {props.city}</li>
            <li>country: {props.country}</li>
            <li>email: {props.email}</li>
            <li>phone: {props.phone}</li>
            </ul>
        </div>
    )
}


export default FriendProfile

