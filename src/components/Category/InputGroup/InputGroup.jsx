const InputGroup = ({ total, name, setID }) => {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => setID(e.target.value)}
        className="form-select"
        id={name}
        defaultValue=""
      >
        <option value="1">Choose...</option>

        {[...Array(total).keys()].map((x) => {
          return (
            <option key={x} value={x + 1}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default InputGroup;
