import "../courseLearn/courseLearn.css"
export default function listenSpell()
{
    return (
        <div className="content__container">
        <input type="checkbox" id="content__checkbox" className="content__input" />
        <div className="content-left hide-on-mobile hide-on-tablet">
          <div className="flex__container header__container">
            <a href="courseLearn.html" className="content-left__header">List 1</a>
            <a href="" className="content-left__dropleft">
              <label htmlFor="content__checkbox"
                ><i className="content-left__icon fa-solid fa-angle-left"></i
              ></label>
            </a>
          </div>
          <div className="course-learn__container">
            <ul className="course-learn__list">
              <li className="course-learn__item">
                <a
                  href="vocabularyFlashCard.html"
                  className="content__box-course content__box-course--done content__box-course--chosen content__box-course-in-list"
                >
                  <i
                    className="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 className="content__box-course-category">Từ vựng:</h3>
                  <span
                    className="content__box-description content__box-description-in-list"
                  >
                    FlashCard</span
                  >
                </a>
              </li>
              <li className="course-learn__item">
                <a
                  href="multichoiceLearn.html"
                  className="content__box-course content__box-course--done content__box-course-in-list"
                >
                  <i
                    className="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span
                    className="content__box-description content__box-description-in-list"
                  >
                    Trắc nghiệm từ vựng</span
                  >
                </a>
              </li>
              <li className="course-learn__item">
                <a
                  href="findPairLearn.html"
                  className="content__box-course content__box-course--done content__box-course-in-list"
                >
                  <i
                    className="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span
                    className="content__box-description content__box-description-in-list"
                  >
                    Tìm cặp</span
                  >
                </a>
              </li>
              <li className="course-learn__item">
                <a
                  href="listenLearn.html"
                  className="content__box-course content__box-course--done content__box-course-in-list"
                >
                  <i
                    className="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span
                    className="content__box-description content__box-description-in-list"
                  >
                    Nghe từ vựng</span
                  >
                </a>
              </li>
              <li className="course-learn__item">
                <a
                  href="translateLearn.html"
                  className="content__box-course content__box-course--done content__box-course-in-list"
                >
                  <i
                    className="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span
                    className="content__box-description content__box-description-in-list"
                  >
                    Dịch nghĩa / Điền từ</span
                  >
                </a>
              </li>
              <li className="course-learn__item">
                <a
                  href="listenSpell.html"
                  className="content__box-course content__box-course--done content__box-course-in-list"
                >
                  <i
                    className="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span
                    className="content__box-description content__box-description-in-list"
                  >
                    Nghe chính tả</span
                  >
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-right">
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
              <div className="content__box row">
                <div className="listenSpell-left col l-4">
                  <ul className="listenSpell__list">
                    <li className="listenSpell">List gồm 55 từ</li>
                    <li className="listenSpell">
                      Để check đáp án, bạn gõ từ bạn nghe được và bấm Enter. Sau
                      đó bạn click vào hình lá cờ để check.
                    </li>
                    <li className="listenSpell">
                      Từ vựng sẽ xuất hiện dưới đây sau khi bạn check đáp án
                      hoặc chuyển câu
                    </li>
                  </ul>
                </div>
                <div className="listenSpell-right col l-8">
                  <div className="listenSpell__select-container">
                    <span className="listenSpell__select-text"
                      >Chọn chế độ luyện tập:</span
                    >
                    <select name="" id="" className="listenSpell__select">
                      <option value="">Tất cả</option>
                      <option value="">Trừ các từ đã bỏ qua</option>
                      <option value="">Chỉ những từ làm sai</option>
                    </select>
                  </div>
                  <div className="listenSpell__link-option">
                    <a href="" className="listenSpell__link"
                      >Lựa chọn từ để luyện</a
                    >
                    <a href="" className="listenSpell__link"
                      >Xem danh sách các từ bỏ qua / sai</a
                    >
                  </div>
                  <audio className="spell__audio" controls>
                    <source src="" type="audio/mpeg" />
                  </audio>
                  <p className="listenSpell__speaker">
                    Audio 2 (US)
                    <a href="#" className="vocabulary__speaker">
                      <i
                        className="fa-solid fa-volume-high vocabulary__content-icon"
                      ></i>
                    </a>
                  </p>
                  <div className="listenSpell__box">
                    <h3 className="translate__header">
                      sự đón tiếp, tiệc chiêu đãi
                    </h3>
                    <p className="translate__hint">
                      = the act of greeting people; a formal party at which
                      important people are welcomed
                    </p>
                    <a href="" className="listenSpell__dictation">/Phiên âm/ </a>
                    <div className="translate__input-container">
                      <input type="text" className="listenSpell__input" />
                    </div>
                  </div>
                  <div className="listenSpell__answer-container">
                    <button className="listenSpell__answer">
                      <i
                        className="fa-regular fa-circle-check listenSpell__icon"
                      ></i
                      >Check kết quả
                    </button>
                  </div>
                  <div className="listenSpell__option">
                    <div className="listenSpell__option-left">
                      <input type="checkbox" id="listenSpell__checkbox" />
                      <label
                        htmlFor="listenSpell__checkbox"
                        className="listenSpell__text"
                        >Hiện nghĩa tiếng Việt</label
                      >
                      <br />
                      <input
                        type="checkbox"
                        id="listenSpell__checkbox-replay"
                      />
                      <label
                        htmlFor="listenSpell__checkbox-replay"
                        className="listenSpell__text"
                        >Auto Replay</label
                      >
                    </div>
                    <div className="listenSpell__option-right">
                      <a href="" className="listenSpell_continue"
                        >Từ tiếp theo <i className="fa-solid fa-chevron-right"></i
                      ></a>
                    </div>
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
      </div>
    )
}