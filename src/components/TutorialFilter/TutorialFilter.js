import { useState } from "react";
import { useAppContext } from "../../App";
import "./TutorialFilter.css";

// Custom components
import {
  getTopRatedTutorialsForTags,
  getDistinctTags,
} from "../../utils/helperFunctions";

const TutorialFilter = () => {
  const { tutorials, setTutorialsAfterFilter } = useAppContext();
  const [userTags, setUserTags] = useState([]);
  const allTags = getDistinctTags(tutorials);

  const handleSubmit = (event) => {
    event.preventDefault();
    const tutorialsFiltered = getTopRatedTutorialsForTags(
      tutorials,
      userTags,
      20
    );
    setTutorialsAfterFilter(tutorialsFiltered);
  };

  const handleChange = (event) => {
    // Add or remove checked/unchecked tag.
    const inputTag = event.target.value;
    if (userTags.includes(inputTag)) {
      setUserTags(userTags.filter((tagMember) => tagMember !== inputTag));
    } else {
      setUserTags((existingTags) => {
        return [...existingTags, inputTag];
      });
    }
  };

  const clearFilters = () => {
    //
    setTutorialsAfterFilter(null);
    // clear the fields;
    let checkboxes = document.getElementsByTagName("input");
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type === "checkbox") {
        checkboxes[i].checked = false;
      }
    }
  };

  return (
    <div className="filter">
      <p className="filter__text">Filter tutorials (Select one or more tags)</p>
      <form onSubmit={handleSubmit}>
        {allTags.map((tag) => {
          return (
            <div className="filter__checkbox" key={tag}>
              <input
                type="checkbox"
                id={tag}
                name={tag}
                value={tag}
                onChange={handleChange}
              />
              <label htmlFor={tag}>{tag}</label>
            </div>
          );
        })}

        <button type="submit" width="auto">
          Apply Filter(s)
        </button>
      </form>
      <button onClick={clearFilters} width="auto">
        Clear Filter(s)
      </button>
    </div>
  );
};

export default TutorialFilter;
