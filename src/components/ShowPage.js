import React, {Component } from 'react';
import '../ShowPage.css';

class ShowPage extends Component {
state = {
  islogged:false
}
  constructor() {
    super();
  }
  componentDidMount() {
    fetch('https://blog.2gram.site/islogged')
    .then(function(result) {
      return result.json();
    })
    .then(function(json) {
      this.setState({islogged:json});
    }.bind(this));
  }

  render() {
    var data = Object.assign(this.props.data);
    if(this.state.islogged) {
      var btn_delete = <input type="button" id="btn_delete" value="삭제" onClick={
        function(e) {
          e.preventDefault();
          this.props.onDelete(this.props.value);
        }.bind(this)
      }/>
    }
    if(data.subject != undefined) document.getElementsByTagName('Title')[0].innerHTML = data.subject;
    // console.log(data);
    return (
      <section className='article'>
        <div className="article_main_head">
          <article className="main_head">
            {data.subject}
          </article>
          <article className="article_author">
          {btn_delete}
            <article className="article_author_name">
            {data.author}
            </article>
            <article className="article_author_date">
            {data.signdate}
            </article>
          </article>
        </div>
        <article dangerouslySetInnerHTML={ {__html: data.raw_content} } className="article_main_desc">
        </article>
      </section>
    );
  }
}

export default ShowPage;
