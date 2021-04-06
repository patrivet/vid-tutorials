import "./Tutorial.css";

const Tutorial = ({ tutorial }) => {
  const ratingPercentageRounded = Math.round(tutorial.averageUserRating * 100);

  return (
    <div className="tutorial">
      <p className="tutorial__title">
        <strong>Title: </strong>
        {tutorial.videoTitle}
      </p>
      <p className="tutorial__title">
        <strong>Teacher: </strong>
        {tutorial.teacherName}
      </p>
      <p className="tutorial__title">
        <strong>Average User Rating: </strong>
        {ratingPercentageRounded}%
      </p>
      <p className="tutorial__tags">
        <strong>Tags: </strong>
      </p>
      {tutorial.tags.map((tag) => {
        return (
          <div key={tag} className="tag">
            {tag}
          </div>
        );
      })}
    </div>
  );
};

export default Tutorial;
