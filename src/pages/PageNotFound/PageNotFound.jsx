import { useNavigate } from "react-router-dom";
import scss from "./PageNotFound.module.scss";
const PageNotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 2000);
  return (
    <div className={scss.wrapper}>
      <h1 className={scss.title}>Oops! Сan't find this page🤨</h1>
    </div>
  );
};
export default PageNotFound;
