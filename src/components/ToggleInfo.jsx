import React from 'react';
import styles from './CompanyInfo.module.css';

const ToggleInfo = ({isConstrict, title, content}) => {
    if(isConstrict){
        return null
    }
    return (
        <div className={styles.info}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.desc}>{content}</p>
        </div>
    )
}

export default ToggleInfo;