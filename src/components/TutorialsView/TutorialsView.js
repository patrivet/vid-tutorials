import { intersection } from "lodash";

// Custom components
import TutorialList from "../TutorialList";
import TutorialSearch from "../TutorialSearch";
import TutorialFilter from "../TutorialFilter";
import { useAppContext } from "../../App";

const TutorialsView = () => {
  const {
    tutorials,
    fetchTutorials,
    tutorialsAfterSearch,
    tutorialsAfterFilter,
  } = useAppContext();

  // Combine filtered lists of tutorials, if search and/or filters set.
  let tutorialsToUse;
  tutorialsToUse = tutorials;
  const searchApplied = Array.isArray(tutorialsAfterSearch);
  const filterApplied = Array.isArray(tutorialsAfterFilter);

  if (searchApplied && filterApplied) {
    tutorialsToUse = intersection(tutorialsAfterFilter, tutorialsAfterSearch);
  } else if (searchApplied) {
    tutorialsToUse = tutorialsAfterSearch;
  } else if (filterApplied) {
    tutorialsToUse = tutorialsAfterFilter;
  }

  return (
    <div>
      <h1>Video Tutorials Viewer</h1>
      <button onClick={fetchTutorials}>Refresh latest tutorials</button>
      <TutorialSearch />
      <TutorialFilter />
      <h4>Showing {tutorialsToUse.length} Tutorials:-</h4>
      <TutorialList tutorials={tutorialsToUse} />
    </div>
  );
};

export default TutorialsView;
