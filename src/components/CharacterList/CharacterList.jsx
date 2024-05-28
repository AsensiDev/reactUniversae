import { useState, useEffect } from "react";
import Character from "../Character/Character";
import "./CharacterList.css";

function NavPage({ page, setPage }) {
  return <div className="d-flex align-items-center justify-content-between"></div>
}

export function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await data.json();
      const filteredCharacters = results.filter(character => character.id <= 6);
      setCharacters(filteredCharacters);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row flex-wrap justify-content-evenly">
          {characters.map((character) => (
            <div className="col-md-4 my-3" id="curso" key={character.id}>
              <Character
                key={character.id}
                name={character.name}
                origin={character.origin}
                image={character.image}
              />
            </div>
          ))}
        </div>
      )}

      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
