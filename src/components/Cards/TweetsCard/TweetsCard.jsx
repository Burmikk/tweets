import { useState, useEffect } from "react";
import numeral from "numeral";
import scss from "./TweetsCard.module.scss";
const TweetsCard = ({ item }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(item.followers);

  useEffect(() => {
    const followers = JSON.parse(localStorage.getItem(`followers${item.id}`));
    const isFollow = JSON.parse(localStorage.getItem(`isfollow${item.id}`));
    if (isFollow) {
      setFollowersCount(followers);
      setIsFollowing(isFollow);
    }
  }, [item.id]);

  useEffect(() => {
    localStorage.setItem(`followers${item.id}`, JSON.stringify(followersCount));
    localStorage.setItem(`isfollow${item.id}`, isFollowing);
  }, [followersCount, isFollowing, item.id]);

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
      <div className={scss.card}>
        <h2>{item.user}</h2>
        <p>{item.tweets}</p>
        <p>{numeral(followersCount).format("0,0")}</p>
        <button className={scss.btn} onClick={handleFollow}>
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>
    </>
  );
};
export default TweetsCard;
