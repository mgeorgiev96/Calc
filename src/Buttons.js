import React from 'react'

function Buttons(props) {
    return (
       <p className={props.value}>{props.id}</p>
    );
}

export default Buttons;
