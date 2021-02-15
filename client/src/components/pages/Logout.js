import React from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";
function Logout(props) {

    const onClick = async (e) => {
        e.preventDefault();
        const resp = await axios.post('/api/users/logout');
        console.log(resp);
        props.doLogout();
    };

    return (
        <div className="logout-div">
            {/* <button className="logout-button" onClick={onClick}>
                Logout
        </button> */}
            <div className="logout-button#">
                <Button color="default" variant="contained" className="favbutton" onClick={onClick}>Logout</Button>
            </div>
        </div>
    );
}

export default Logout;