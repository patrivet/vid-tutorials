// Custom components
import TutorialList from "../TutorialList";
import TutorialSearch from "../TutorialSearch";
import { useAppContext } from "../../App";

const TutorialsView = () => {
  const { tutorials, fetchTutorials } = useAppContext();

  return (
    <div>
      <h1>Video Tutorials Viewer</h1>
      <button onClick={fetchTutorials}>Refesh latest tutorials</button>
      <TutorialSearch />
      <TutorialList tutorials={tutorials} />
    </div>
  );
};

export default TutorialsView;
