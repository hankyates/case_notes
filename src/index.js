var React = require('react');

import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router'

var App = React.createClass({
  render: function() {
    return <h1>Hello What?</h1>;
  }
});

var About = React.createClass({
  render: function() {
    return <h1>Hello About?</h1>;
  }
});

document.addEventListener("DOMContentLoaded", function(event) {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="about" component={About}/>
      </Route>
    </Router>
  ), document.getElementById('app'))
});
