import React, {Component} from 'react';
class MainArticle extends Component {

  render() {
    var _list = Object.assign(this.props.data);
    var _location =`${_list.content}-${_list.value}`;
    var _thumbnail = null;
    if(_list.pic === 'Y')
      _thumbnail =
        <div className="main_pic">
            <a href={_location}><img src={_list.thumbnail}/></a>
        </div>;
    return(
    <div className="main_article">
    {_thumbnail}
      <div className="main_text">
        <div className="main_text_head">
        <a href={_location}>{_list.subject}</a>
      </div>
        <div className="main_text_author">
        <div className="author_name">
        {_list.author}
          </div>
          <div className="author_date">
            {_list.signdate}
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default MainArticle;
