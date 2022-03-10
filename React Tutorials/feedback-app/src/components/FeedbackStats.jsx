import PropTypes from 'prop-types';

function feedbackStats({ feedback }) {
  // Calculate rating average
  let average =
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;

  average = parseFloat(average.toFixed(1));

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

feedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default feedbackStats;
