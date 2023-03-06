import style from './Search.module.css'
import { FaSearch } from 'react-icons/fa'

import { useNavigate } from 'react-router-dom';

function Search(){
    
    const navigate = useNavigate();


    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return(
        <form className={style.searchContainer} onSubmit={handleSubmit}>
            <div className={style.searchBox}>
                <input 
                type="text" 
                className={style.searchInput} 
                
                onChange={(e)=>{ 
                    const value = e.target.value;
                    navigate("/?search=" + value);
                }}
                />

                <button type="submit" className={style.searchButton}>
                    <FaSearch  size={20}/>
                </button>
            </div>
        </form>
    )
}

export default Search;