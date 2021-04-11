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
      <img src={character.image} alt={character.image}></img>
      <p>Name: {character.name}</p>
      <p>Status: {character.status}</p>
      <p>Gender: {character.gender}</p>
      {character.type !== "" && <p>Type: {character.type}</p>}
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
}
