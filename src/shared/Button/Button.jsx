const LoadMore = ({ styleOption, onClick, children }) => {
  return (
    <button className={styleOption} onClick={onClick}>
      {children}
    </button>
  );
};

export default LoadMore;
