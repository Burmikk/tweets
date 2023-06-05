import { useState, useEffect } from "react";
import LoadMore from "../LoadMore/LoadMore";
import TweetsCard from "./TweetsCard/TweetsCard";
import getCards from "../../shared/api.js";

const Cards = () => {
    const itemsPerPage = 3;
    const [cards, setCards] = useState([]);
    const [visibleItems, setVisibleItems] = useState(itemsPerPage);

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

    const showItems = cards.slice(0, visibleItems).map((item) => <TweetsCard key={item.id} item={item} />);
    // const showItems = cards.map((item) => <TweetsCard key={item.id} item={item} />);

    return (
        <div>
            {showItems}
            {cards.length > visibleItems && <LoadMore loadMore={handleLoadMore} />}
        </div>
    );
};

export default Cards;
