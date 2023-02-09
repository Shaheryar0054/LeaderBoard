const userData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GojQ1zM8TQnGeitxRy7T/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        user: document.querySelector('#name').value,
        score: document.querySelector('#score').value,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    },
  );
  const postedScore = await response.json();
  return postedScore;
};

export default userData;