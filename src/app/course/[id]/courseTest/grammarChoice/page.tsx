import  Link  from 'next/link';
export default function BodyCourseTest(){
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
                <h3 className="multichoice__header">
                  Most of the department attended the Mobile World ______ in
                  Barcelona.
                </h3>
                <p className="multichoice__hint">
                  Hint: =an event where people exchange ideas
                </p>
                <div className="multichoice__box">
                  <div className="multichoice__answer row">
                    <a href="" className="multichoice__link col l-6 m-6 c-12"
                      >conference</a
                    >
                    <a href="" className="multichoice__link col l-6 m-6 c-12"
                      >sometime</a
                    >
                  </div>
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