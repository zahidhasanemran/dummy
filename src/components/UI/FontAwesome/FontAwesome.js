import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import classes from './FontAwesome.module.css';

const FontAwesome = (props) => {
    
    let FontAwesomeClass = props.class ? props.class : classes.defFontAwesome;

    return (
        <a className={FontAwesomeClass} href={props.iconLink}>
            <FontAwesomeIcon icon={props.icon}  />
        </a>
    );
};

export default FontAwesome;