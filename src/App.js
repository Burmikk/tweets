import "./App.css";
import Cards from "./components/Cards/Cards";
import getCards from "./shared/api.js";
import { useEffect, useState } from "react";

function App() {
    const [cards, setCards] = useState([]);

    const fetch = async () => {
        try {
            const { data } = await getCards();
            setCards(data);
        } catch (error) {}
    };

    useEffect(() => {
        fetch();
    }, []);

    const itemsPerPage = 3;
    return <Cards items={cards} itemsPerPage={itemsPerPage} />;
}

export default App;
