import { useState } from "react";
import { useAppContext } from "../../App";
import "./TutorialFilter.css";

// Custom components
import { getTopRatedTutorialsForTags } from "../../utils/helperFunctions";

const TutorialFilter = () => {
  const { tutorials, setTutorialsAfterFilter, distinctTags } = useAppContext();
  const [userTags, setUserTags] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do nothing if no tags selected
    if (!userTags.length) return;

    const tutorialsFiltered = getTopRatedTutorialsForTags(
      tutorials,
      userTags,
      20
    );
    setTutorialsAfterFilter(tutorialsFiltered);
  };

  const updateTags = (inputTag) => {
    // Add or remove checked/unchecked tag.
    if (userTags.includes(inputTag)) {
      setUserTags(userTags.filter((tagMember) => tagMember !== inputTag));
    } else {
      setUserTags((existingTags) => {
        return [...existingTags, inputTag];
      });
    }
  };

  const clearFilters = () => {
    // Reset state to null.
    setTutorialsAfterFilter(null);
    // clear the fields;
    let checkboxes = document.getElementsByTagName("input");

    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type === "checkbox") {
        if (checkboxes[i].checked === true) {
          // remove from tags Array
          updateTags(checkboxes[i].name);
          checkboxes[i].checked = false;
        }
      }
    }
  };

  return (
    <div className="filter">
      <p className="filter__text">Filter tutorials (Select one or more tags)</p>
      <form onSubmit={handleSubmit}>
        {distinctTags.map((tag) => {
          return (
            <div className="filter__checkbox" key={tag}>
              <input
                type="checkbox"
                id={tag}
                name={tag}
                value={tag}
                onChange={(event) => {
                  updateTags(event.target.value);
                }}
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
