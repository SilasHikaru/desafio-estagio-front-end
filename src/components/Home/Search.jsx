import React, {useState} from 'react';
import styles from './Search.module.css';
import SearchIcon from '../../assets/search.svg'; 

const Search = ({setCnpjFind}) => {

    const [cnpj, setCnpj] = useState('');

    function handleSearch (event) { 

        event.preventDefault();
        console.log("teste");
 
        setCnpjFind({
            cliente:'Fulano',
            empresa:'empresa',
            cnpj:'123.345.345/2345-43',
            email:'Fulano@empresa.com',
            telefone:'12345-1234',
            endereco:'Rua da empresa',
            cep:'12345-123',
            numero:'1234'
        }) 

        if(false){
        fetch('').then((response)=>{
            console.log(response);
            return response.json();
        }).then( json => {
            console.log(json);
        });
        } 
    }
    

    return (
        <form action="" onSubmit={handleSearch} >
            <label htmlFor="search" className={styles.labelSearch}> Pesquise pela empresa</label>
            <div className={styles.containerInput}> 

                <input  
                    className={styles.inputSearch} 
                    id="search" placeholder='CNPJ' 
                    type="text"
                    value={cnpj}
                    onChange={({target}) => setCnpj(target.value)}
                ></input>
                
                <button className={styles.btnSearch}> <img src={SearchIcon} alt="Pesquise"></img> </button>
            </div>
        </form>
    )
}

export default Search;