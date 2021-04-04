import { useState } from "react";
import { useAppContext } from "../../App";

// Custom components
import { searchForTutorials } from "../../utils/helperFunctions";

const TutorialSearch = () => {
  const { tutorials, setTutorialsAfterSearch } = useAppContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const tutorialsFromSearch = searchForTutorials(tutorials, searchTerm);
    setTutorialsAfterSearch(tutorialsFromSearch);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const resetSearch = () => {
    // Reset state to null.
    setTutorialsAfterSearch(null);
    // clear the fields;
    let searchInput = document.getElementById("search__input");
    if (searchInput) searchInput.value = "";
  };

  return (
    <div className="search">
      <p className="search__text">Search tutorials by title:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search__input"
          className="search__input"
          placeholder="Enter search term(s)"
          onChange={handleChange}
        />
        <button type="submit" width="auto">
          Search
        </button>
      </form>
      <button type="submit" width="auto" onClick={resetSearch}>
        Clear Search
      </button>
    </div>
  );
};

export default TutorialSearch;
