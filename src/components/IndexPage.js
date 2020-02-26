import React, {Component} from 'react';
import MainArticle from './MainArticle';
import SubArticle from './SubArticle';
import AllArticle from './AllArticle';
import '../App.css';
import '../Header.css';

class Line extends Component {
  render() {
    return (
      <div className="recent_line">
        <p>{this.props.word}</p>
        <hr color="#f3f3f3"/>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return(
      <header>
        <div className="title">
        <h1>Blog</h1>
        </div>
      </header>
    );
  }
}

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLoading:true,
      lists:[{
        subject:null,
        content:null,
        value:null,
        signdate:null,
        pic:'N',
        thumbnail:null,
        author:null
      }]
    }
  }
  componentDidMount() {
    fetch(`https://${this.props.api}`+'/getList')
    .then(function(result){
      return result.json();
    })
    .then(function(json){
      var _list = Array.from(json);
      this.setState({lists:_list, isLoading:false});
    }.bind(this));
  }
  render() {
    var _MainArticle = null;
    var _SubArticle = [];
    var _AllArticle = [];
    var _line = [null,null];
    if(this.state.isLoading) {
    } else {
      if(this.state.lists.length>1) _line[0] = <Line word='Recent'/>
      if(this.state.lists.length>3) _line[1] = <Line word='All'/>
      _MainArticle = <MainArticle onClick={(data) => {

      }} data={this.state.lists[0]}/>
      var i=1;
      while(i<this.state.lists.length) {
        if(i<=2) {
          _SubArticle.push(<SubArticle key={i} data={this.state.lists[i]}/>)
        }
        if(i>2) {
          _AllArticle.push(<AllArticle key={i} data={this.state.lists[i]}/>)
        }
        i++;
      }
    }
    return (
      <div>
      <Header />
        <section>
          {_MainArticle}
          {_line[0]}
          <div className="sub_wrap">
          {_SubArticle}
          </div>
          {_line[1]}
          <div className="all_wrap">
          {_AllArticle}
          </div>
        </section>
      </div>
    );
  }
}

export default IndexPage;
