// Components/Routes.js
import React, {Component} from 'react';
import IndexPage from './IndexPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowPage from './ShowPage';
import '../space.css';

class ReadPage extends Component {
  render() {
    return(
      <Router>
        <Route exact path="/" render={(props) => <IndexPage api={this.props.api}/>}/>
        <Route path="/:id" render={(props) => <Item api={this.props.api} props={props}/>} />
      </Router>
    );
  }
}

export default ReadPage;

class Item extends Component {
  state={
    data:{},
    value:this.props.props.match.url.substr(-32,32),
    api: this.props.api,
    nodata:true
  }
  componentDidMount() {
    fetch(`https://${this.state.api}`+`/getContents?value=${this.state.value}`)
      .then(function(result){
        return result.json();
      })
      .then(function(json){
        var _data = json;
        this.setState({data:_data,nodata:false});
      }.bind(this));
  }
  componentDidUpdate() {
    if(this.props.props.match.url.indexOf(this.state.data.content) === -1) {
      this.props.props.history.push(`/${this.state.data.content}-${this.state.value}`);
    }
  }
  render(){
    return(
      <div>
      <Space/>
        <ShowPage data={this.state.data} value={this.state.value}
        onDelete={
          function(value) {
            if(window.confirm('정말로 삭제하십니까?')){
            var data = {value:value};
            var req_del = new XMLHttpRequest();
            req_del.addEventListener("load",function() {
              if(req_del.status === 200) {
              }
            });
            req_del.open("DELETE",`https://${this.state.api}`+"/delete");
            req_del.setRequestHeader("Content-Type","application/json");
            req_del.send(JSON.stringify(data));
            alert('삭제되었습니다.');
            this.props.props.history.push('/');
          }
        }.bind(this)
        }/>
      </div>
    );
  }
}

class Space extends Component {
  render() {
    return(
      <div className="space">
      </div>
    );
  }
}
