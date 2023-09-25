const Filter = ({filter, setFilter, setSort}) => {
    return(
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todos</option>
                        <option value="Complete">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem alfabética:</p>
                    <button onClick={() => setSort("ASC")}>Asc</button>
                    <button onClick={() => setSort("DESC")}>Desc</button>
                </div>
            </div>
        </div>
    )
}

export default Filter