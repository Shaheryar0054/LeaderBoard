const getData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GojQ1zM8TQnGeitxRy7T/scores/',
  );
  const endScore = await response.json();
  return endScore.result;
};

export default getData;