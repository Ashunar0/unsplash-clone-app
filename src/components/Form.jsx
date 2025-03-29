const Form = ({ setWord, onSubmit }) => {
  return (
    <div className="form-container">
      <input
        type="text"
        name="keyword"
        placeholder="写真とイラストを検索"
        onChange={(e) => setWord(e.target.value)}
        className="search-input"
      />
      <button type="submit" onClick={onSubmit} className="search-button">
        検索
      </button>
    </div>
  );
};

export default Form;
