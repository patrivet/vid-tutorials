import { useState, useEffect, createContext, useContext } from "react";
import "./App.css";

// Custom components
import * as apiService from "./services/apiService";
import TutorialsView from "./components/TutorialsView";
import { getDistinctTags } from "./utils/helperFunctions";

// App Context setup
const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

function App() {
  const [tutorials, setTutorials] = useState([]);
  const [ready, setReady] = useState(false);
  const [distinctTags, setDistinctTags] = useState();
  const [tutorialsAfterSearch, setTutorialsAfterSearch] = useState(null);
  const [tutorialsAfterFilter, setTutorialsAfterFilter] = useState(null);

  const fetchTutorials = () => {
    apiService
      .getTutorials()
      .then((tutorials) => {
        setTutorials(tutorials);
      })
      .then(() => setReady(true));
  };

  // Call API on component mount
  useEffect(() => {
    fetchTutorials();
  }, []);

  // Gather list of distinct tags across all tutorials.
  useEffect(() => {
    const distinctTags = getDistinctTags(tutorials);
    setDistinctTags(distinctTags);
  }, [tutorials]);

  // Define context
  const context = {
    tutorials,
    setTutorials,
    fetchTutorials,
    distinctTags,
    tutorialsAfterSearch,
    setTutorialsAfterSearch,
    tutorialsAfterFilter,
    setTutorialsAfterFilter,
  };

  return (
    <AppContext.Provider value={context}>
      <div className="App">
        {ready ? <TutorialsView /> : <div>Loading...</div>}
      </div>
    </AppContext.Provider>
  );
}

export default App;
