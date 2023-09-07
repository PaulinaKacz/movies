import "./App.css";
import React from "react";
import Counter from "components/Counter";
import FilterSection from "components/FilterSection/FilterSection";
import SearchSection from "components/Search/SearchSection";

function App() {
  return (
    <div className="App">
      <SearchSection />
      <Counter initialCount={1} />
      <FilterSection />
    </div>
  );
}

export default App;
