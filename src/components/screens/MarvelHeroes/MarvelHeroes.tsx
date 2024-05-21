import { useEffect, useState } from "react";
import { heroesData } from "../../../data/heroes";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";
import { IHero } from "../../../types/Hero";

export const MarvelHeroes = () => {
  const [heroes, setHeroes] = useState<IHero[]>([]);

  const handleGetMarvelHeroes = () => {
    const filteredHeroes = heroesData.filter(
      (hero) => hero.publisher === "Marvel Comics"
    );
    setHeroes(filteredHeroes);
  };

  useEffect(() => {
    handleGetMarvelHeroes();
  }, []);

  return <ListHeroes heroes={heroes} title="Héroes Marvel" />;
};
