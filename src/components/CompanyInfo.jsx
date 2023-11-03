import React, {useEffect, useState} from 'react';
import styles from './CompanyInfo.module.css';
import ButtonManager from './ButtonManager';
import ToggleInfo from './ToggleInfo';
import ConstrictBtn from '../assets/constrict.svg';
import Expand from '../assets/expand.svg';
import Close from '../assets/close.svg';

const CompanyInfo = ({list, data, setCnpjFind}) => {

    const [toggleBtn, setToggleBtn] = useState(Expand);
    const [toggleConstrict, setToggleConstrict] = useState(true);

    useEffect(()=>{
        if(!list){
            setToggleBtn(ConstrictBtn);
            setToggleConstrict(false);
        }
        console.log(data);
    },[])

    function handleToggleBtn() {
        
        if(toggleBtn === ConstrictBtn){  
            setToggleBtn(Expand);
            setToggleConstrict(true);
        } else {
            setToggleBtn(ConstrictBtn);
            setToggleConstrict(false);
        }
    }

    function handleCloseBtn(){
        setCnpjFind(null);
    }

    return (
        <>
        
        <div className={styles.container}>
            <div className={styles.containerInfo}>
                <div className={styles.info}>
                    <p className={styles.title}>Cliente</p>
                    <p className={styles.desc}>{data.cliente}</p>
                </div>

                <div className={styles.info}>
                    <p className={styles.title}>Empresa</p>
                    <p className={styles.desc}>{data.empresa}</p>
                </div>

                <div className={styles.info}>
                    <p className={styles.title}>CNPJ</p>
                    <p className={styles.desc}>{data.cnpj}</p>
                </div>

                <div className={styles.info}>
                    <p className={styles.title}>Email</p>
                    <p className={styles.desc}>{data.email}</p>
                </div>
               
                <ToggleInfo isConstrict={toggleConstrict} title={"Telefone"} content={data.telefone} />
                <ToggleInfo isConstrict={toggleConstrict} title={"Endereço"} content={data.endereco} />
                <ToggleInfo isConstrict={toggleConstrict} title={"CEP"} content={data.cep} />
                <ToggleInfo isConstrict={toggleConstrict} title={"Número"} content={data.numero} />
                
            </div>
            <section className={styles.containerManager}>
                <ButtonManager isConstrict={toggleConstrict} className={styles.BtnManager} color="#4991B9" type="Atualizar"/>
                <ButtonManager isConstrict={toggleConstrict} className={styles.BtnManager} color="#FF6161" type="Excluir"/>
            </section>
            {list
                ? <div className={styles.toggleBtn}onClick={handleToggleBtn}><img src={toggleBtn}></img></div>
                :  <div className={styles.toggleBtn}onClick={handleCloseBtn}><img src={Close}></img></div>
            }
           
            
        </div>
        </>
    )
}

export default CompanyInfo;