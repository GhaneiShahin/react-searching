import React, { useState, useEffect } from "react";

const people = [
  "ALex",
  "Mari",
  "Joe",
  "Thomas",
  "Sara",
  "Lee",
  "Rose",
  "Jack",
  "Jessi",
  "Sofia"
];

const App = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = people.filter((person) =>
      person.toLowerCase().includes(search)
    );
    setSearchResults(results);
  }, [search]);

  return (
    <section style={{ marginTop: "5em", marginRight: "2em" }}>
      <h3 className="alert alert-info text-center">List of Waches</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        style={{ margin: "0 auto", width: "30%" }}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <ul className="text-center mt-5" style={{ listStyle: "none" }}>
        {searchResults.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default App;
