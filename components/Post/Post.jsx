
const Post = (props) => {
    return(
        <div className="content__article article">
      <div className="article__image">
        <img src="" alt="" />
      </div>

      <div className="article__title">
        <a href={"/post/" + props.post.id}>{props.post.tittle}</a>
      </div>

      <div className="article__info info">
        <div className="info__user">
          <div className="info__user-avatar">
            <img src="" alt="" />
          </div>
          <div className="info__user-name">
            <a href={`/user/${props.post.author}`}>{props.post.author}</a>
          </div>
        </div>
        <div className="info__category">
          <a href={`/category/${props.post.category}`}>{props.post.category}</a>
        </div>
        <div className="info__time"><i className="far fa-calendar-alt"></i>{" " + props.post.dateCreate}</div>
        <div className="info__like"> <i className="far fa-heart"></i>{" " + props.post.likes}</div>
        <div className="info__views"><i className="far fa-eye"></i>{" " + props.post.views}</div>
        
      </div>
    </div>
    )
}

export default Post;