import { useState, useEffect } from "react";
import LoadMore from "../../shared/Button/Button";
import TweetsCard from "./TweetsCard/TweetsCard";
import getCards from "../../shared/api.js";
import scss from "./Cards.module.scss";

const Cards = () => {
  const itemsPerPage = 3;
  const [cards, setCards] = useState([]);
  console.log("cards--->", cards);
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const buttonClasses = `${scss.btn} ${scss.activeBtn}`;

  const fetchData = async () => {
    try {
      const { data } = await getCards();
      setCards(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibleItems((prevState) => prevState + itemsPerPage);
  };

  const showItems = cards
    .slice(0, visibleItems)
    .map((item) => <TweetsCard key={item.id} item={item} />);

  return (
    <div className={scss.container}>
      {showItems}
      {cards.length > visibleItems && (
        <LoadMore styleOption={buttonClasses} onClick={handleLoadMore}>
          Load More
        </LoadMore>
      )}
    </div>
  );
};

export default Cards;
