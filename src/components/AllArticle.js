import React, {Component} from 'react';

class AllArticle extends Component {
  render() {
    var _list = this.props.data;
    var location =`${_list.content}-${_list.value}`;
    var _thumbnail = null;
    if(_list.pic === 'Y')
      _thumbnail =
               <div className="all_pic">
                <img src={_list.thumbnail}/>
              </div>;
    return (
      <div className="all_article">
      <a href={location}>{_thumbnail}</a>
      <div className="all_text">
        <div className="all_text_head">
          <a href={location}>{_list.subject}</a>
        </div>
        <div className="all_text_desc">
        </div>
        <div className="all_text_author">
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
export default AllArticle;
