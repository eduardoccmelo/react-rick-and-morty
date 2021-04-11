import { useEffect, useState } from "react";
import CharacterBox from "./CharacterBox";
// import Filters from "./Filters";

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);
  const [nameFilter, setNameFilter] = useState();
  const [statusFilter, setStatusFilter] = useState();

  useEffect(() => {
    let url = `https://rickandmortyapi.com/api/character?page=${page}`;

    if (nameFilter) {
      url = `https://rickandmortyapi.com/api/character?name=${nameFilter}&status=${statusFilter}`;
    }

    if (statusFilter) {
      url = `https://rickandmortyapi.com/api/character?name=${nameFilter}&status=${statusFilter}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters((prevCharacter) => {
          return [...prevCharacter, ...data.results];
        });
        setTotalPages(data.info.pages);
      });
  }, [page, nameFilter, statusFilter]);

  function renderCharacters() {
    const allCharacters = characters.map((character) => (
      <CharacterBox
        id={character.id}
        key={character.id}
        name={character.name}
        image={character.image}
      />
    ));
    return allCharacters;
  }

  function handleLoadMore() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  function handleOnChangeInput(event) {
    const inputElement = event.target;
    setNameFilter(inputElement.value);
    console.log(event.target.value);
  }

  function handleOnClickSelectInput(event) {
    const inputValue = event.target.value;
    if (inputValue === "alive") {
      setStatusFilter("alive");
    } else if (inputValue === "dead") {
      setStatusFilter("dead");
    } else if (inputValue === "unknown") {
      setStatusFilter("unknown");
    } else if (inputValue === "all") {
      setStatusFilter("");
    }
    console.log(event.target.value);
  }

  return (
    <div>
      <form className="filterInputs">
        <input
          onChange={handleOnChangeInput}
          placeholder="  Name of the character"
        ></input>
        <select onClick={handleOnClickSelectInput}>
          <option value="all">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </form>
      <div className="characterList">{renderCharacters()}</div>
      {page < totalPages && (
        <div className="loadMoreDiv">
          <button className="loadMoreButton" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
