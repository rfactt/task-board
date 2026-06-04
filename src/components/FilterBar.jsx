function FilterBar({ currentFilter, onChangeFilter }) {
  return (
    <div className="filter-bar">
      <button
        className={currentFilter === "todas" ? "filter-button active" : "filter-button"}
        onClick={() => onChangeFilter("todas")}
      >
        Todas
      </button>

      <button
        className={currentFilter === "a-fazer" ? "filter-button active" : "filter-button"}
        onClick={() => onChangeFilter("a-fazer")}
      >
        A fazer
      </button>

      <button
        className={currentFilter === "em-andamento" ? "filter-button active" : "filter-button"}
        onClick={() => onChangeFilter("em-andamento")}
      >
        Em andamento
      </button>

      <button
        className={currentFilter === "concluida" ? "filter-button active" : "filter-button"}
        onClick={() => onChangeFilter("concluida")}
      >
        Concluídas
      </button>
    </div>
  );
}

export default FilterBar;