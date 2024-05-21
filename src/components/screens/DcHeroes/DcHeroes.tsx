import { useEffect, useState } from "react";
import { heroesData } from "../../../data/heroes";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";
import { IHero } from "../../../types/Hero";

export const DcHeroes = () => {
  const [heroes, setHeroes] = useState<IHero[]>([]);

  const handleGetDcHeroes = () => {
    const filteredHeroes = heroesData.filter(
      (hero) => hero.publisher === "DC Comics"
    );
    setHeroes(filteredHeroes);
  };

  useEffect(() => {
    handleGetDcHeroes();
  }, []);

  return <ListHeroes heroes={heroes} title="Héroes de DC Comics" />;
};
