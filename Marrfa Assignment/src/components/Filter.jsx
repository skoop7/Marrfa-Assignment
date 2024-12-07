import "./Filter.css";

export default function Filter({ category, setCategory }) {
  const categories = ["All", "Programming", "Design"];
  return (
    <div className="filter-container">
      <label htmlFor="category">Filter By Category : </label>
      <select
        name="category"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((c) => (
          <option value={c} key={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}
