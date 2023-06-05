import { Link } from "react-router-dom";
import scss from "./Home.module.scss";

const Home = () => {
  return (
    <div className={scss.container}>
      <div className={scss.wrapper}>
        <h1 className={scss.title}>Let's find some intresting tweets!</h1>
        <Link className={scss.link} to="/tweets">
          Find
        </Link>
      </div>
    </div>
  );
};
export default Home;
