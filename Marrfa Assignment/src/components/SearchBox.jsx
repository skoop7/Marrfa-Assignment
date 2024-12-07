import "./SearchBox.css";

export default function SearchBox({ setSearch }) {
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
}
