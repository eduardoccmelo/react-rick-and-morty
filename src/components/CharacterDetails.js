import { useHistory, useParams } from "react-router";
import { useState, useEffect } from "react";

export default function CharacterDetails() {
  const { id } = useParams();
  const history = useHistory();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
      });
  }, [id]);

  return (
    <div className="characterDetails">
      <img
        className="imgDetailCard"
        src={character.image}
        alt={character.image}
      ></img>
      <p>
        <span className="titleDetail">Name</span>
        <span className="textDetail">{character.name}</span>
      </p>
      <p>
        <span className="titleDetail">Gender</span>
        <span className="textDetail">{character.gender}</span>
      </p>
      <p>
        <span className="titleDetail">Status</span>
        <span className="textDetail">{character.status}</span>
      </p>
      <p>
        <span className="titleDetail">Specie</span>
        <span className="textDetail">{character.species}</span>
      </p>
      {character.type !== "" && (
        <p>
          <span className="titleDetail">Type</span>
          <span className="textDetail">{character.type}</span>
        </p>
      )}
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
}
