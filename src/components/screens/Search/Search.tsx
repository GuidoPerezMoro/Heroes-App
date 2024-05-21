import { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { IHero } from "../../../types/Hero";
import { heroesData } from "../../../data/heroes";
import { Form, InputGroup } from "react-bootstrap";
import { CardHero } from "../../ui/CardHero/CardHero";
import "../../../styles/variables.css"; // Importa las variables primero
import styles from "./Search.module.css"; // Importa el módulo CSS

export const Search = () => {
  const { values, handleChange } = useForm({
    search: "",
  });
  const { search } = values;
  const [heroes, setHeroes] = useState<IHero[]>([]);
  useEffect(() => {
    const result = heroesData.filter((h) =>
      h.superhero.toLowerCase().trim().includes(search.trim())
    );
    setHeroes(result);
  }, [search]);

  return (
    <div className={styles.containerSearch}>
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Text>Nombre Heroe</InputGroup.Text>
          <Form.Control
            type="text"
            name="search"
            placeholder="Search"
            className=" mr-sm-2"
            onChange={handleChange}
          />
        </InputGroup>
      </div>
      <div className={styles.containerListHero}>
        {heroes.length > 0 ? (
          <div>
            {heroes.map((hero) => (
              <div key={hero.id}>
                <CardHero hero={hero}></CardHero>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h2>No se han encontrado resultados</h2>
          </div>
        )}
      </div>
    </div>
  );
};
