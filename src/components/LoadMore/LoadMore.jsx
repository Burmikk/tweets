import scss from "./LoadMore.module.scss";
const LoadMore = ({ loadMore }) => {
    return (
        <button className={scss.btn} onClick={loadMore}>
            Load more
        </button>
    );
};

export default LoadMore;
