import { useState, useEffect } from "react";
import numeral from "numeral";
import scss from "./TweetsCard.module.scss";
import logo from "../../img/logo.png";
import message from "../../img/message.png";
import LoadMore from "../../shared/Button/Button";

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
  const buttonClasses = `${scss.btn} ${isFollowing ? scss.activeBtn : ""}`;
  return (
    <>
      <div className={scss.card}>
        <img className={scss.logo} src={logo} alt="" />
        <img className={scss.message} src={message} alt="" />
        <div className={scss.line}>
          <div className={scss.circle_wrapper}>
            <div className={scss.circle}>
              <div className={scss.inside_circle}>
                <img className={scss.photo} src={item.avatar} alt="avatar" />
              </div>
            </div>
          </div>
        </div>
        <div className={scss.card_wrapper}>
          <h2 className={scss.text}>{item.user}</h2>
          <p className={`${scss.text} ${scss.tweets}`}>{item.tweets} tweets</p>
          <p className={scss.text}>
            {numeral(followersCount).format("0,0")} Followers
          </p>
          <LoadMore styleOption={buttonClasses} onClick={handleFollow}>
            {isFollowing ? "Following" : "Follow"}
          </LoadMore>
        </div>
      </div>
    </>
  );
};
export default TweetsCard;
