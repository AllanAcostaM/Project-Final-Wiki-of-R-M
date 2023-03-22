import FiltersButtons from "../FiltersButtons/FiltersButtons";

const Genders = ({ setPageNumber, setGender }) => {
  const genders = ["female", "male", "genderless", "unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingOne">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          Genders
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body accordion-body d-flex flex-wrap gap-3">
          {genders.map((items, index) => (
            <FiltersButtons
              task={setGender}
              setPageNumber={setPageNumber}
              key={index}
              name="gender"
              index={index}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genders;
