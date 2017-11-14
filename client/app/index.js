import React from 'react';
import { render } from 'react-dom';
import Onboard from './components/Onboard';
import Home from './components/Home';
import { createStore } from 'redux';
import reducer from './reducers/index';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

let store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/onboard" component={Onboard} />
          </div>
        </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));
