import "./Result.css";

export default function Result({ results }) {
  return (
    <div className="result-list">
      {results.length > 0 ? (
        results.map((res, index) => (
          <div key={index} className="result-item">
            <h3>{res.title}</h3>
            <p>{res.category}</p>
          </div>
        ))
      ) : (
        <p className="no-result">No results found</p>
      )}
    </div>
  );
}
