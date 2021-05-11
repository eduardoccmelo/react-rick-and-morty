import { Link } from "react-router-dom";

export default function CharacterBox({ name, image, id, status }) {
  return (
    <div
      className={
        status === "Alive"
          ? "characterHumanCard"
          : status === "Dead"
          ? "characterDeadCard"
          : "characterUnknownCard"
      }
    >
      <img className="cardImg" src={image} alt={image}></img>
      <p className="cardTitle">{name}</p>
      <Link to={`/charactersList/${id}`}>
        <button className="cardButton">Open</button>
      </Link>
    </div>
  );
}
