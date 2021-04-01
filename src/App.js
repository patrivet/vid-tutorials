import { useState, useEffect, createContext, useContext } from "react";
import "./App.css";

// Custom components
import * as apiService from "./services/apiService";
import TutorialsView from "./components/TutorialsView";

// App Context setup
const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

function App() {
  const [tutorials, setTutorials] = useState([]);
  const [ready, setReady] = useState(false);

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

  // Define context
  const context = {
    tutorials,
    setTutorials,
    fetchTutorials,
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
