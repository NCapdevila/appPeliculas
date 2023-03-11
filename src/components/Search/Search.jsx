import style from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

function Search() {
    const [query, setQuery] = useSearchParams();
    const search = query.get("search");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={style.searchContainer} onSubmit={handleSubmit}>
            <div className={style.searchBox}>
                <input
                    type="text"
                    className={style.searchInput}
                    value={search ?? ""}
                    autoFocus
                    placeholder="Title"
                    aria-label="Search Movies"
                    onChange={(e) => {
                        const value = e.target.value;
                        setQuery({ search: value });
                    }}
                />

                <button type="submit" className={style.searchButton}>
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    );
}

export default Search;
