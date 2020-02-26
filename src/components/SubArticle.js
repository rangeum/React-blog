import React, {Component} from 'react';
class SubArticle extends Component {
  render() {
    var _list = this.props.data;
    var location =`${_list.content}-${_list.value}`;
    var _thumbnail = null;
    if(_list.pic === 'Y')
      _thumbnail =
               <div className="sub_pic">
                <img src={_list.thumbnail}/>
              </div>;
    return (
      <div className="sub_article">
      <a href={location}>{_thumbnail}</a>
        <div className="sub_text">
          <div className="sub_text_head">
            <a href={location}>{_list.subject}</a>
          </div>
          <div className="sub_text_desc">
          </div>
          <div className="sub_text_author">
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
export default SubArticle;
