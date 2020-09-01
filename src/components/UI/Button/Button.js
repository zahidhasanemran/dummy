import React from 'react';

const Button = (props) => {
    return (
        <a className={props.Link} href={props.link}> {props.children} </a>
    );
};

export default Button;