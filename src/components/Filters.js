export default function Filter({ onFilterName, onFilterStatus }) {
  function handleOnStatus(event) {
    const inputValue = event.target.value;
    onFilterStatus(inputValue);
  }

  function handleOnName(event) {
    const inputValue = event.target.value;
    onFilterName(inputValue);
  }

  return (
    <div className="Filter">
      <form className="filterInputs">
        <input onChange={handleOnName} placeholder=" Name of the character" />
        <select onClick={handleOnStatus}>
          <option value="all">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </form>
    </div>
  );
}
