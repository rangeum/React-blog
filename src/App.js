import React, {Component} from 'react';
import IndexPage from './components/IndexPage';
import ReadPage from './components/Routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  state = {
    API_SERVER:'api.2gram.site'
  }
  render() {
    document.getElementsByTagName('Title')[0].innerHTML = 'KDR BLOG';
    return(
      <Router>
        <Route exact path="/" render={(props) => <IndexPage api={this.state.API_SERVER}/>}/>
        <Route path="/:id" render={(props) => <ReadPage api={this.state.API_SERVER}/>} onDelete={
          function() {
            this.props.history.push('/');
          }.bind(this)
        }/>
      </Router>
    );
  }
}
export default App;
