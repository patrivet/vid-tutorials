import Tutorial from "../Tutorial";

const TutorialList = ({ tutorials }) => {
  return (
    <div>
      {tutorials.map((tutorial) => {
        return <Tutorial key={tutorial.id} tutorial={tutorial} />;
      })}
    </div>
  );
};

export default TutorialList;
