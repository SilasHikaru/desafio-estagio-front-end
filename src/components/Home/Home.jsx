import React, {useEffect, useState} from 'react';
import styles from './Home.module.css';
import Search from './Search';
import CompanyInfo from '../CompanyInfo';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';

const Home = () => {

    const [cnpjFind, setCnpjFind] = useState(null);
    const [clientes, setClientes] = useState([
        {
            cliente:'Fulano',
            empresa:'empresa',
            cnpj:'123.345.345/2345-43',
            email:'Fulano@empresa.com',
            telefone:'12345-1234',
            endereco:'Rua da empresa',
            cep:'12345-123',
            numero:'1234'
        },
        {
            cliente:'Siclano',
            empresa:'empresa',
            cnpj:'123.345.345/2345-43',
            email:'Siclano@empresa.com',
            telefone:'12345-1234',
            endereco:'Rua da empresa',
            cep:'12345-123',
            numero:'1234'
        },
        {
            cliente:'Beltrano',
            empresa:'Empresa',
            cnpj:'123.345.345/2345-43',
            email:'Beltrano@empresa.com',
            telefone:'12345-1234',
            endereco:'Rua da empresa',
            cep:'12345-123',
            numero:'1234'
        },
        
        
    ]);

    

    useEffect(()=>{
        console.log(clientes);
    },[cnpjFind])
    
    return(
        <div className="container">
            
            <h1 className={styles.title}>Gerenciamento de <span className={styles.colorYellow}>empresas</span></h1>
            <section className={styles.searchAndCreate}>   
                <Search  setCnpjFind={setCnpjFind}/>
                <Link to="/create" className={styles.btnCreate}>Cadastrar</Link>
            </section>
            { cnpjFind && <CompanyInfo list={false} data={cnpjFind} setCnpjFind={setCnpjFind}/>}

            <hr></hr>

            <p className={styles.titleList}>Empresas cadastradas</p>

            { clientes && 
                clientes.map((cliente)=>{
                    return <CompanyInfo list={true} data={cliente}/>
                })
            }
           
        </div>
    )
}

export default Home;