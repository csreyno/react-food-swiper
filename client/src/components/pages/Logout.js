import React, { useState } from 'react';
import axios from 'axios';

function Logout(props) {

    const onClick = async (e) => {
        e.preventDefault();
        const resp = await axios.post('/api/users/logout');
        console.log(resp);
        props.doLogout();
    };

    return (
        props.doLogout()
        // <div className="logout-div">
        // <button className="logout-button" onClick={onClick}>
        //     Logout
        // </button>
        // </div>
    );
}

export default Logout;