import React from 'react';
import './App.css';
import TodoItems from './components/todoItems';

class App extends React.Component {
  /**
   * Set initial state in constructor
   */
  constructor(props) {
    super(props);
  }

  /**
   * Render the html
   */
  render() {
    return (
      <div class="container">
        <header>
          <h2>TODO APP</h2>
        </header>
        <TodoItems />
      </div>
    )
  }
}

export default App;
