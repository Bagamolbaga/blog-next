

export default function Header() {
    return (
      <header className="header" id="h">
        <div className="main-container">
          <div className="header__row">
            <div className="header__control">
              <div className="header__control-item search">
                <div id="modal-search" className="header__control-text">
                  Search
                </div>
                <i className="fas fa-search"></i>
              </div>
              <div className="header__control-item reg">
                <input type="checkbox" id="modal-reg" />
                <label htmlFor="modal-reg" className="header__control-text">
                  Create account
                </label>
                <i className="fas fa-user-plus"></i>
                <div className="header__modal modal">
                  <form action="" className="modal__form">
                    <label htmlFor="modal-reg" className="modal__close">
                      &times;
                    </label>
                    <div className="modal__title">Registration</div>
                    <div className="modal__date">
                      <input
                        type="text"
                        placeholder="Enter your nickname"
                        className="modal__input"
                      />
                      <input
                        type="text"
                        placeholder="Enter your login"
                        className="modal__input"
                      />
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="modal__input"
                      />
                    </div>
                    <button className="modal__btn">Sign up</button>
                  </form>
                </div>
              </div>
              <div className="header__control-item login">
                <input type="checkbox" id="modal-login" />
                <label forhtml="modal-login" className="header__control-text">
                  Login
                </label>
                <i className="fas fa-sign-in-alt"></i>
                <div className="header__modal modal">
                  <form action="" className="modal__form">
                    <label forhtml="modal-login" className="modal__close">
                      &times;
                    </label>
                    <div className="modal__title">Authorization</div>
                    <div className="modal__date">
                      <input
                        type="text"
                        placeholder="Enter your login"
                        className="modal__input"
                      />
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="modal__input"
                      />
                    </div>
                    <button className="modal__btn">Log in</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="header__logo">
              <a href="/">bloger</a>
            </div>
            <div className="header__icons">
              <div className="header__icons-icon">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
              <div className="header__icons-icon">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div className="header__icons-icon">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div className="header__icons-icon">
                <a href="#">
                  <i className="fab fa-telegram-plane"></i>
                </a>
              </div>
              <div className="header__icons-icon">
                <a href="#">
                  <i className="fab fa-vk"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="m" className="header__searching">
          <div className="header__searching-content">
            <span className="header__searching-cross">&times;</span>
            <div className="header__searching-form">
              <input type="search" className="header__searching-input" />
              <button className="header__searching-btn">Search</button>
            </div>
          </div>
        </div>
      </header>
    );
  }