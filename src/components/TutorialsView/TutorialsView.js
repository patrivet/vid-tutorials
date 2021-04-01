import { useEffect, useState } from "react";
import { getTutorials } from "../../services/apiService";

// Custom components
import TutorialList from "../TutorialList";

const TutorialsView = () => {
  const [tutorials, setTutorials] = useState([]);
  const [ready, setReady] = useState(false);

  const fetchTutorials = () => {
    getTutorials()
      .then((tutorials) => {
        setTutorials(tutorials);
      })
      .then(() => setReady(true));
  };

  // Call API on component mount
  useEffect(() => {
    fetchTutorials();
  }, []);

  return (
    <div>
      {ready ? <TutorialList tutorials={tutorials} /> : <div>Loading...</div>}
    </div>
  );
};

export default TutorialsView;
