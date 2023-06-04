import { useState } from "react";
import LoadMore from "../LoadMore/LoadMore";
import TweetsCard from "./TweetsCard/TweetsCard";

const Cards = ({ items, itemsPerPage }) => {
    const [visibleItems, setVisibleItems] = useState(itemsPerPage);

    const handleLoadMore = () => {
        setVisibleItems((prevState) => prevState + itemsPerPage);
    };

    const showItems = items.slice(0, visibleItems).map((item) => <TweetsCard key={item.id} item={item} />);

    return (
        <div>
            {showItems}
            {items.length > visibleItems && <LoadMore loadMore={handleLoadMore} />}
        </div>
    );
};

export default Cards;
