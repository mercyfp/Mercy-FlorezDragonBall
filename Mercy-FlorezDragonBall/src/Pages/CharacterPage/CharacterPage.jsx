import "./CharacterPage.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import CharCard from "../../Components/CharCard/ChardCard";

const CharacterPage = () => {
  const [data, setData] = useState([]);
  let { specie } = useParams();

  useEffect(() => {
    axios.get(`https://dragonball-api.com/api/characters`)
      .then(char => setData(char.data.results));
  }, []);

  const filteredData = !specie || specie === "Humano"
    ? data.filter(elem => elem.species && elem.species.toLowerCase() === "human")
    : data.filter(elem => elem.species === specie);

  return (
    <main id="character-page">
      <h1 id="title-character">Character Page</h1>
      {
        <div id="characters-species">
          {filteredData.map((element) => (
            <div key={element.id}>
              <Link to={`/details/${element.id}`}>
                <CharCard img={element.image} nombre={element.name} especie={element.species} />
              </Link>
            </div>
          ))}
        </div>
      }
    </main>
  );
};

export default CharacterPage;