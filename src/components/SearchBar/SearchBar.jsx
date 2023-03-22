import s from "./style.module.css";

const SearchBar = ({ setSearchBar, setPageNumber }) => {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearchBar(e.target.value);
        }}
        placeholder="Search for Characters"
        type="text"
        className={s.input}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className={`${s.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
