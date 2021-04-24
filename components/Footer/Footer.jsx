
export default function Footer() {
    return (
      <footer className="footer">
        <div className="main-container">
          <div className="footer__row">
            <div className="footer__about">
              <div className="footer__logo">
                <a href="index.php">bloger</a>
              </div>
              <div className="footer__text">
                Perfectly to any kind of news and magazine blogs. Designed
                responsive and ready for retina.
              </div>
            </div>
            <div className="footer__menu">
              <ul className="footer__list">
                <li className="footer__menu-item">
                  <a href="#">Home</a>
                </li>
                <li className="footer__menu-item">
                  <a href="#">About</a>
                </li>
                <li className="footer__menu-item">
                  <a href="#">Contact</a>
                </li>
              </ul>
              <ul className="footer__list">
                <li className="footer__menu-item">
                  <a href="categorie.php?c=Art and illustration">
                    Art And Illustration
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a href="categorie.php?c=Architecture">Architecture</a>
                </li>
                <li className="footer__menu-item">
                  <a href="categorie.php?c=Fashion">Fashion</a>
                </li>
                <li className="footer__menu-item">
                  <a href="categorie.php?c=Photography">Furniture</a>
                </li>
                <li className="footer__menu-item">
                  <a href="categorie.php?c=Graphing disign">Graphic Design</a>
                </li>
                <li className="footer__menu-item">
                  <a href="categorie.php?c=Photography">Photography</a>
                </li>
              </ul>
            </div>
            <div className="footer__social">
              <div className="footer__social-title">We are social</div>
              <div className="footer__social-icons">
                <div className="footer__social-block">
                  <a href="#" className="footer__social-icons-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
                <div className="footer__social-block">
                  <a href="#" className="footer__social-icons-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
  
                <div className="footer__social-block">
                  <a href="#" className="footer__social-icons-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
                <div className="footer__social-block">
                  <a href="#" className="footer__social-icons-icon">
                    <i className="fab fa-telegram-plane"></i>
                  </a>
                </div>
  
                <div className="footer__social-block">
                  <a href="#" className="footer__social-icons-icon">
                    <i className="fab fa-vk"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__top">
          <i className="fas fa-chevron-up"></i>
          <div className="footer__top-text">
            <a href="#">page top</a>
          </div>
        </div>
      </footer>
    );
  }
  