import { FC } from "react";
import { IHero } from "../../../types/Hero";

import "../../../styles/variables.css"; // Importa las variables primero
import styles from "./ListHeroes.module.css"; // Importa el módulo CSS
import { CardHero } from "../CardHero/CardHero";

interface IListHeroes {
  heroes: IHero[];
  title: string;
}

export const ListHeroes: FC<IListHeroes> = ({ heroes, title }) => {
  return (
    <div className={styles.containerPrincipalList}>
      <div className={styles.containerTitle}>
        <h2>{title}</h2>
      </div>
      <div className={styles.containerList}>
        {heroes.map((hero) => (
          <div>
            <CardHero hero={hero} key={hero.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
