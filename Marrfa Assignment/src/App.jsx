import { useState } from "react";
import Filter from "./components/Filter";
import Result from "./components/Result";
import SearchBox from "./components/SearchBox";
import "./index.css";

const mockData = [
  { id: 1, title: "React Tutorial", category: "Programming" },
  { id: 2, title: "JavaScript Guide", category: "Programming" },
  { id: 3, title: "CSS Basics", category: "Design" },
  { id: 4, title: "UI/UX Principles", category: "Design" },
  { id: 5, title: "Backend with Node.js", category: "Programming" },
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filterData = mockData.filter((data) => {
    const matchesSearch = data.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchCategory = category == "All" || data.category === category;
    return matchesSearch && matchCategory;
  });

  return (
    <div className="App">
      <h1> React App</h1>
      <SearchBox setSearch={setSearchQuery} />
      <Filter category={category} setCategory={setCategory} />
      <Result results={filterData} />
    </div>
  );
}
