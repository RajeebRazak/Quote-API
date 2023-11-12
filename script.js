const MY_API_KEY = '008959270emsh36d9e69819437edp106d4ajsn023665c1dabf' ;

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');
    button.addEventListener('click', () => {
      fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "quotes15.p.rapidapi.com",
          "x-rapidapi-key": MY_API_KEY
        }
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        
        document.getElementById('quote').innerHTML = response.content;
        document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
      })
      .catch(err => {
        console.log(err);
      });
    });
  });
  