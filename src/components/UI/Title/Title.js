import React from 'react';


const Title = (props) => {
    return (
        <h3 className={props.titleClass}> {props.children} </h3>
    );
};

export default Title;