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

  return (
    <div className="search">
      <p className="search__text">Search tutorials by title:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__input"
          placeholder="Enter search term(s)"
          onChange={handleChange}
        />
        <button type="submit" width="auto">
          Search
        </button>
      </form>
    </div>
  );
};

export default TutorialSearch;
