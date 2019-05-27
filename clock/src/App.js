import React from 'react';
import './App.css';
import Clock from './components/Clock'

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Take a look at our CLOCK!
        </p> 
      </header>
      <main>
          <Clock></ Clock>
      </main>
    </div>
  );
  }
}

export default App;
