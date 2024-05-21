import { FC } from "react";
import { IHero } from "../../../types/Hero";
import { Card } from "react-bootstrap";
import styles from "./CardHero.module.css";
import { useNavigate } from "react-router-dom";
interface ICardHero {
  hero: IHero;
}

export const CardHero: FC<ICardHero> = ({ hero }) => {
  const navigate = useNavigate();
  const handleNavigateHero = () => {
    navigate(`/hero/${hero.id}`);
  };
  return (
    <div className={styles.card}>
      <Card onClick={handleNavigateHero}>
        <Card.Img variant="top" src={`/assets/heroes/${hero.id}.jpg`} />
        <Card.Body>
          <div className={styles.heroTitle}>
            <Card.Title>{hero.superhero}</Card.Title>
          </div>
          <Card.Text>
            <p>
              <b>Alter ego:</b> {hero.alter_ego}
            </p>
            <p>
              <b>Editorial:</b> {hero.publisher}
            </p>
            <p>
              <b>Primera aparición:</b> {hero.first_appearance}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
