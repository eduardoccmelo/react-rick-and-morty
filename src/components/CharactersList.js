import { useEffect, useState } from "react";
import CharacterBox from "./CharacterBox";
import Filters from "./Filters";

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    let url = `https://rickandmortyapi.com/api/character?page=${page}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters((prevCharacter) => {
          return [...prevCharacter, ...data.results];
        });
        setTotalPages(data.info.pages);
      });
  }, [page]);

  function renderCharacters() {
    return characters
      .filter((character) => {
        return character.status === filterStatus || filterStatus === "all";
      })
      .filter((character) => {
        return (
          character.name.toLowerCase().includes(filterName.toLowerCase()) ||
          filterName === ""
        );
      })
      .map((character) => {
        return (
          <CharacterBox
            status={character.status}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        );
      });
  }

  function handleLoadMore() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  function onFilterStatus(inputValue) {
    if (inputValue === "all") {
      setFilterStatus("all");
    } else if (inputValue === "Alive") {
      setFilterStatus("Alive");
    } else if (inputValue === "Dead") {
      setFilterStatus("Dead");
    } else if (inputValue === "unknown") {
      setFilterStatus("unknown");
    }
  }

  function onFilterName(inputValue) {
    setFilterName(inputValue);
  }

  return (
    <div>
      <Filters onFilterName={onFilterName} onFilterStatus={onFilterStatus} />
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
