import React from 'react';
import style from './ButtonManager.module.css';

const ButtonManager = ({isConstrict, type, color}) => {
    if(isConstrict){
        return null;
    }
    return (
        <button className={style.button} style={{color:color, borderColor:color}}>
            {type}
        </button>
    )
}

export default ButtonManager;