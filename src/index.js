import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MathFact from './MathFact';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {mathFacts: [],
                  isReady: false}
  }

  componentDidMount(){
    fetch("http://numbersapi.com/random/trivia?json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({mathFacts: data.text,
                    isReady: true})
    })
  }

  render() {
    if(this.state.isReady) {
      return (
        <div className="container">
          <h2 className="site-title">Ms. Dean's Number Fact of the Day</h2>
          <MathFact text={this.state.mathFacts}/>
          <div className="gif-source">
          Background gif created by <a href="https://linjacqueline.com/" target="_blank" rel="noreferrer">Jacqueline Jing Lin</a> 
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Hold up, a random trivia fact about numbers is about to appear....</h1>
        </div>
      )
    }
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

