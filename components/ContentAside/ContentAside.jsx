import {useContext} from 'react'
import {Context} from '../useContext/context.js'

export default function ContentAside() {
    let {posts} = useContext(Context);
    console.log(posts)
    let GetPopularPost = (posts) => {
      let returnPost;
      let views = 0;
      posts.forEach((post) => {
        if (views < post.views) {
          views = post.views
          returnPost = post
        }
      });
      return returnPost;
    }
      let popularPost = GetPopularPost(posts);
    
      return(
          <aside className="content__aside">
                <div className="content__aside-item popular">
                  <div className="popular__title aside-title">most popular</div>
  
                  <div className="popular__article">
                    <div className="popular__arcticle-image">
                      <a href={`/post/`}>
                        <img src="" alt="" />
                      </a>
                    </div>
                    <div className="popular__arcticle-text aside-text">
                      <div className="aside-text__subtitle">
                        <a href={`/post/`}>{popularPost.tittle}</a>
                      </div>
                      <div className="aside-text__title">
                        <a href={`/post/`}>{popularPost.text}</a>
                      </div>
                      <div className="aside-text__views"><i className="far fa-eye"></i>{popularPost.views}</div>
                    </div>
                  </div>
                </div>
  
                <div className="content__aside-item tweet">
                  <div className="popular__title aside-title">Latest tweet</div>
                  <div className="tweet__account account">
                    <a href="#">@HelloBloger</a>
                  </div>
                  <div className="tweet__text">
                    The best way to start Friday is... to read Yomac blog! Check
                    out our latest articles — "Fashion…
                    <a href="#">https://www.instagram.com/p/Bafe5G4/</a>
                  </div>
                </div>
                <div className="content__aside-item newsletter">
                  <div className="popular__title aside-title">Newsletter</div>
                  <div className="newsletter__text">
                    Enter your email address to receive all news, updates on new
                    arrivals, special offers and other information.
                  </div>
                  <form action="" className="newsletter__form">
                    <input
                      type="text"
                      className="newsletter__form-input"
                      placeholder="Your e-mail"
                    />
                    <button className="newsletter__form-btn">subscribe</button>
                  </form>
                </div>
                <div className="content__aside-item instagram">
                  <div className="popular__title aside-title">instagram</div>
                  <div className="instagram__account account">
                    <a href="#">#Bloger</a>
                  </div>
                  <div className="instagram__photos">
                    <div className="instagram__photos-photo">
                      <img src="" alt="" />
                    </div>
                    <div className="instagram__photos-photo">
                      <img src="" alt="" />
                    </div>
                    <div className="instagram__photos-photo">
                      <img src="" alt="" />
                    </div>
                    <div className="instagram__photos-photo">
                      <img src="" alt="" />
                    </div>
                    <div className="instagram__photos-photo">
                      <img src="" alt="" />
                    </div>
                    <div className="instagram__photos-photo">
                      <img src="" alt="" />
                    </div>
                  </div>
                </div>
                <div className="content__aside-item tags">
                  <div className="popular__title aside-title">popular Tags</div>
                  <div className="tags__items">
                    <div className="tags__items-tag">
                      <a href="categorie.php?c=Architecture">Architecture</a>
                    </div>
                    <div className="tags__items-tag">
                      <a href="categorie.php?c=Graphing disign">
                        Graphing disign
                      </a>
                    </div>
                    <div className="tags__items-tag">
                      <a href="categorie.php?c=Art and illustration">
                        Art And illustration
                      </a>
                    </div>
  
                    <div className="tags__items-tag">
                      <a href="categorie.php?c=Fashion">Fashion</a>
                    </div>
                    <div className="tags__items-tag">
                      <a href="categorie.php?c=Photography">Photography</a>
                    </div>
                  </div>
                </div>
              </aside>
      )
  }