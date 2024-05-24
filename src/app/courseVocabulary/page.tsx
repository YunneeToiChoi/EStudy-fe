
import "../courseLearn/courseLearn.css"
import  Link  from 'next/link';
export default function CourseVocabulary(){
    return(
        <div className="content__container">
        <input type="checkbox" id="content__checkbox" className="content__input" />
        <div className="content-left hide-on-mobile hide-on-tablet">
          <div className="flex__container header__container">
            <Link href="courseLearn.html" className="content-left__header"
              >IELTS General Reading</Link>
            <Link href="" className="content-left__dropleft">
              <label htmlFor="content__checkbox"
                ><i className="content-left__icon fa-solid fa-angle-left"></i
              ></label>
            </Link>
          </div>
          <div className="course-learn__container">
            <ul className="course-learn__list">
              <li className="course-learn__item">
                <Link href="" className="course-learn__link course-learn__link--chosen"
                  >Từ vựng TOEIC</Link>
              </li>
              <li className="course-learn__item">
                <Link href="" className="course-learn__link">
                  Phương pháp làm các dạng câu hỏi trong IELTS General Reading
                </Link>
              </li>
              <li className="course-learn__item">
                <Link href="" className="course-learn__link">
                  Video chữa đề chi tiết
                </Link>
              </li>
              <li className="course-learn__item">
                <Link href="" className="course-learn__link"> PRACTICE ZONE </Link>
              </li>
              <li className="course-learn__item">
                <Link href="" className="course-learn__link">
                  GT Practice Set 7 Test 1: Luyện tập từ vựng
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-right">
          <nav className="nav__content-right">
            <div
              className="nav__content-header-right hide-on-mobile hide-on-tablet"
            >
              <Link href="" className="nav__content-link-right"
                >IELTS General Reading
              </Link>
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
              <Link href="" className="content-left__header">IELTS General Reading</Link>
              <Link href="" className="content-left__dropleft">
                <label htmlFor="nav-mobile-course-checkbox"
                  ><i className="content-left__icon fa-solid fa-angle-left"></i
                ></label>
              </Link>
            </div>
            <div className="course-learn__container">
              <ul className="course-learn__list">
                <li className="course-learn__item">
                  <Link
                    href=""
                    className="course-learn__link course-learn__link--chosen"
                    >Từ vựng TOEIC</Link>
                </li>
                <li className="course-learn__item">
                  <Link href="" className="course-learn__link">
                    Phương pháp làm các dạng câu hỏi trong IELTS General Reading
                  </Link>
                </li>
                <li className="course-learn__item">
                  <Link href="" className="course-learn__link">
                    Video chữa đề chi tiết
                  </Link>
                </li>
                <li className="course-learn__item">
                  <Link href="" className="course-learn__link"> PRACTICE ZONE </Link>
                </li>
                <li className="course-learn__item">
                  <Link href="" className="course-learn__link">
                    GT Practice Set 7 Test 1: Luyện tập từ vựng
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="content-right__container">
            <div className="grid wide grid-wide-course-learn">
              <h1 className="content__header">Từ vựng TOEIC</h1>
              <div className="content__box">
                <h2 className="content__box-header">Tiến độ học tập</h2>
                <p className="content__box-percent">0%</p>
                <div className="content__box-process"></div>
              </div>
              <div className="content__box">
                <h2 className="content__box-header">List 1</h2>
                <Link
                  href="vocabularyFlashCard.html"
                  className="content__box-course content__box-course--done">
                  <i
                    className="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 className="content__box-course-category">Từ vựng:</h3>
                  <span className="content__box-description"> FlashCard</span>
                </Link>
                <Link href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span className="content__box-description">
                    Trắc nghiệm từ vựng</span
                  >
                </Link>
                <Link href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span className="content__box-description"> Tìm cặp</span>
                </Link>
                <Link href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span className="content__box-description"> Nghe từ vựng</span>
                </Link>
                <Link href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span className="content__box-description">
                    Dịch nghĩa / Điền từ</span
                  >
                </Link>
                <Link href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span className="content__box-description"> Nghe chính tả</span>
                </Link>
              </div>
              <div className="content__box">
                <h2 className="content__box-header">List 2</h2>
                <Link
                  href=""
                  className="content__box-course content__box-course--done"
                >
                  <i
                    className="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 className="content__box-course-category">Từ vựng:</h3>
                  <span className="content__box-description"> FlashCard</span>
                </Link>
                <Link href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span className="content__box-description">
                    Trắc nghiệm từ vựng</span
                  >
                </Link>
                <Link href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span className="content__box-description"> Tìm cặp</span>
                </Link>
                <Link href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span className="content__box-description"> Nghe từ vựng</span>
                </Link>
                <Link href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span className="content__box-description">
                    Dịch nghĩa / Điền từ</span
                  >
                </Link>
                <Link href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span className="content__box-description"> Nghe chính tả</span>
                </Link>
              </div>
              <div className="content__box">
                <h2 className="content__box-header">List 3</h2>
                <Link
                  href=""
                  className="content__box-course content__box-course--done"
                >
                  <i
                    className="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 className="content__box-course-category">Từ vựng:</h3>
                  <span className="content__box-description"> FlashCard</span>
                </Link>
                <Link href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span className="content__box-description">
                    Trắc nghiệm từ vựng</span
                  >
                </Link>
                <Link href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span className="content__box-description"> Tìm cặp</span>
                </Link>
                <Link href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span className="content__box-description"> Nghe từ vựng</span>
                </Link>
                <Link href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span className="content__box-description">
                    Dịch nghĩa / Điền từ</span
                  >
                </Link>
                <Link href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span className="content__box-description"> Nghe chính tả</span>
                </Link>
              </div>
              <Link href="" className="content__transition-number">1</Link>
            </div>
          </div>
        </div>
      </div>
    )
}