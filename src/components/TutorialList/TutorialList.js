import Tutorial from "../Tutorial";
import { useAppContext } from "../../App";

const TutorialList = () => {
  const { tutorials } = useAppContext();

  return (
    <div>
      {tutorials.map((tutorial) => {
        return <Tutorial key={tutorial.id} tutorial={tutorial} />;
      })}
    </div>
  );
};

export default TutorialList;
