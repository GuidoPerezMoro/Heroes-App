import { useEffect, useState } from "react";
import { IHero } from "../../../types/Hero";
import { useNavigate, useParams } from "react-router-dom";
import { heroesData } from "../../../data/heroes";
import "../../../styles/variables.css"; // Importa las variables primero
import styles from "./HeroDetail.module.css"; // Importa el módulo CSS
import { Button } from "react-bootstrap";

export const HeroDetail = () => {
  const [hero, setHero] = useState<IHero | null>(null);
  const { id } = useParams();
  const getHeroById = () => {
    const result = heroesData.find((h) => h.id === id);
    result ? setHero(result) : setHero(null);
  };

  useEffect(() => {
    getHeroById();
  }, []);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <>
      {hero && (
        <div className={styles.containerHeroDetail}>
          <div className={styles.containerImgHeroDetail}>
            <img src={`/assets/heroes/${id}.jpg`} alt="Imagen del heroe" />
          </div>
          <div>
            <div className={styles.itemHeroDetail}>
              <h3>{hero.superhero}</h3>
            </div>
            <ul>
              <li>
                <div className={styles.itemHeroDetail}>
                  <b>Alter ego:</b> {hero.alter_ego}
                </div>
              </li>
              <li>
                <div className={styles.itemHeroDetail}>
                  <b>Editorial:</b> {hero.publisher}
                </div>
              </li>
              <li>
                <div className={styles.itemHeroDetail}>
                  <b>Primera aparición:</b> {hero.first_appearance}
                </div>
              </li>
            </ul>
            <Button
              className={styles.buttonHeroDetail}
              variant="primary"
              onClick={handleNavigate}
            >
              Regresar
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
