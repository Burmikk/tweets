import { useState } from "react";

const TweetsCard = ({ item }) => {
    const [isFollowing, setIsFollowing] = useState(false);
    const [followersCount, setFollowersCount] = useState(item.followers);

    const handleFollow = () => {
        if (isFollowing) {
            setFollowersCount((prevState) => prevState - 1);
        } else {
            setFollowersCount((prevState) => prevState + 1);
        }
        setIsFollowing(!isFollowing);
    };

    return (
        <>
            <div>
                <h2>{item.user}</h2>
                <p>{followersCount}</p>
                <p>{item.tweets}</p>
                <button onClick={handleFollow}>{isFollowing ? "Following" : "Follow"}</button>
            </div>
        </>
    );
};
export default TweetsCard;
