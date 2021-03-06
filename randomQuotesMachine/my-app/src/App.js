import React from 'react';
import './App.css';

function App() {

  const [quotes, setQuotes] = React.useState([]);
  const [randomQuotes, setRandomQuotes] = React.useState('');

  React.useEffect(() => {
    async function fetchData(){
      const response = await fetch('https://type.fit/api/quotes')
      const data = await response.json();
      setQuotes(data);
      let randomIndex = Math.floor(Math.random() * data.length);
      setRandomQuotes(data[randomIndex]);
    }
    fetchData();
  }, [])

  const getNewQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuotes(quotes[randomIndex]);
  }
  return (
    <div className="App container">
      <div className='jumbotron'>
        <div className='card'>
          <div className='card-header'>Random Quotes Machine</div>
          <div className='card-body'>
            {randomQuotes ? (
              <>
              <h5 className='card-title'>&quot;{randomQuotes.text}&quot;</h5>
              <p className='card-text'> -{randomQuotes.author || 'No author'}</p>
              </>
            ) : (<div></div>)
            }
          </div> 
          <div class="d-grid gap-2 d-md-block">
            <button onClick={getNewQuote} className='btn btn-primary'> new Quote</button>
          
          
            <button class="btn btn-secondary" type="button"><i className='fa fa-twitter'></i></button>
            <button class="btn btn-secondary" type="button"><i className='fa fa-tumblr'></i></button>
          </div>
          </div>
        </div>  
      </div>
    
  );
}

export default App;
