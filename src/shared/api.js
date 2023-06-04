import axios from "axios";

const getCards = () => {
    return axios.get("https://640739b377c1a905a0f22512.mockapi.io/users");
};

export default getCards;
