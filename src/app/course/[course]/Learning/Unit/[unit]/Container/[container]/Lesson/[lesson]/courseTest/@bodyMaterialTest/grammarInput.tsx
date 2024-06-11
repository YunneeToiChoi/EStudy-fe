import  Link  from 'next/link';
export default function GrammarInput(){
    return(
        <div>
               <nav className="nav__content-right">
            <div
              className="nav__content-header-right hide-on-mobile hide-on-tablet"
            >
              <a href="" className="nav__content-link-right"
                >IELTS General Reading
              </a>
              <i className="nav__content-right__icon fa-solid fa-chevron-right"></i>
              <span className="nav__content-transition-right">Từ vựng TOEIC</span>
            </div>
            <label className="hide" htmlFor="nav-mobile-course-checkbox"
              ><i className="fa-solid fa-bars nav__icon"></i
            ></label>
          </nav>
          <input
            type="checkbox"
            id="nav-mobile-course-checkbox"
            className="nav-mobile-course__input"
          />
          <div className="nav__mobile-course hide">
            <div className="flex__container header__container">
              <a href="" className="content-left__header">IELTS General Reading</a>
              <a href="" className="content-left__dropleft">
                <label htmlFor="nav-mobile-course-checkbox"
                  ><i className="content-left__icon fa-solid fa-angle-left"></i
                ></label>
              </a>
            </div>
            <div className="course-learn__container">
              <ul className="course-learn__list">
                <li className="course-learn__item">
                  <a
                    href=""
                    className="course-learn__link course-learn__link--chosen"
                    >Từ vựng TOEIC</a
                  >
                </li>
                <li className="course-learn__item">
                  <a href="" className="course-learn__link">
                    Phương pháp làm các dạng câu hỏi trong IELTS General Reading
                  </a>
                </li>
                <li className="course-learn__item">
                  <a href="" className="course-learn__link">
                    Video chữa đề chi tiết
                  </a>
                </li>
                <li className="course-learn__item">
                  <a href="" className="course-learn__link"> PRACTICE ZONE </a>
                </li>
                <li className="course-learn__item">
                  <a href="" className="course-learn__link">
                    GT Practice Set 7 Test 1: Luyện tập từ vựng
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content-right__container">
            <div className="grid wide grid-wide-course-learn">
              <div className="content__box">
                <p className="translate__hint">
                Bạn đã có con vật cưng nào chưa? &ndash; Chúng tôi có một con chó.
                </p>
                <div className="grammar__question-block">
                  <p>
                    Have you got any pet? &ndash; We&apos;ve got
                    <span><input type="text" className="grammar__input" /></span>
                    dog.
                  </p>
                </div>
                <div className="grammar__check-block">
                  <button className="grammar__btn">Kiểm tra</button>
                </div>
              </div>
              <div className="multichoice__option">
                <a href="" className="multichoice__option-link"
                  ><i className="fa-solid fa-angle-left"></i> Câu trước</a
                >
                <div className="multichoice__auto-container">
                  <input type="checkbox" id="multichoice__checkbox" />
                  <label htmlFor="multichoice__checkbox" className="multichoice__auto"
                    >Tự động chuyển câu</label
                  >
                </div>
                <a href="" className="multichoice__option-link"
                  >Câu sau <i className="fa-solid fa-angle-right"></i
                ></a>
              </div>
              <div className="content__box">
                <h3 className="multichoice__list-text">Danh sách bài tập:</h3>
                <div className="multichoice__list-box">
                  <a
                    href=""
                    className="multichoice__list-number multichoice__list-number--chosen"
                    >1</a
                  >
                  <a href="" className="multichoice__list-number">2</a>
                  <a href="" className="multichoice__list-number">3</a>
                  <a href="" className="multichoice__list-number">4</a>
                  <a href="" className="multichoice__list-number">5</a>
                  <a href="" className="multichoice__list-number">6</a>
                  <a href="" className="multichoice__list-number">7</a>
                  <a href="" className="multichoice__list-number">8</a>
                  <a href="" className="multichoice__list-number">9</a>
                  <a href="" className="multichoice__list-number">10</a>
                  <a href="" className="multichoice__list-number">11</a>
                  <a href="" className="multichoice__list-number">12</a>
                  <a href="" className="multichoice__list-number">13</a>
                  <a href="" className="multichoice__list-number">14</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}