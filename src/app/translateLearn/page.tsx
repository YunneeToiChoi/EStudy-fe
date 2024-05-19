import "../courseLearn/courseLearn.css"
export default function translateLearn(){
    return(
        <div class="content__container">
        <input type="checkbox" id="content__checkbox" class="content__input" />
        <div class="content-left hide-on-mobile hide-on-tablet">
          <div class="flex__container header__container">
            <a href="courseLearn.html" class="content-left__header">List 1</a>
            <a href="" class="content-left__dropleft">
              <label for="content__checkbox"
                ><i class="content-left__icon fa-solid fa-angle-left"></i
              ></label>
            </a>
          </div>
          <div class="course-learn__container">
            <ul class="course-learn__list">
              <li class="course-learn__item">
                <a
                  href="vocabularyFlashCard.html"
                  class="content__box-course content__box-course--done content__box-course--chosen content__box-course-in-list"
                >
                  <i
                    class="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 class="content__box-course-category">Từ vựng:</h3>
                  <span
                    class="content__box-description content__box-description-in-list"
                  >
                    FlashCard</span
                  >
                </a>
              </li>
              <li class="course-learn__item">
                <a
                  href="multichoiceLearn.html"
                  class="content__box-course content__box-course--done content__box-course-in-list"
                >
                  <i
                    class="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 class="content__box-course-category">Luyện tập:</h3>
                  <span
                    class="content__box-description content__box-description-in-list"
                  >
                    Trắc nghiệm từ vựng</span
                  >
                </a>
              </li>
              <li class="course-learn__item">
                <a
                  href="findPairLearn.html"
                  class="content__box-course content__box-course--done content__box-course-in-list"
                >
                  <i
                    class="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 class="content__box-course-category">Luyện tập:</h3>
                  <span
                    class="content__box-description content__box-description-in-list"
                  >
                    Tìm cặp</span
                  >
                </a>
              </li>
              <li class="course-learn__item">
                <a
                  href="listenLearn.html"
                  class="content__box-course content__box-course--done content__box-course-in-list"
                >
                  <i
                    class="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 class="content__box-course-category">Luyện tập:</h3>
                  <span
                    class="content__box-description content__box-description-in-list"
                  >
                    Nghe từ vựng</span
                  >
                </a>
              </li>
              <li class="course-learn__item">
                <a
                  href="translateLearn.html"
                  class="content__box-course content__box-course--done content__box-course-in-list"
                >
                  <i
                    class="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 class="content__box-course-category">Luyện tập:</h3>
                  <span
                    class="content__box-description content__box-description-in-list"
                  >
                    Dịch nghĩa / Điền từ</span
                  >
                </a>
              </li>
              <li class="course-learn__item">
                <a
                  href="listenSpell.html"
                  class="content__box-course content__box-course--done content__box-course-in-list"
                >
                  <i
                    class="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 class="content__box-course-category">Luyện tập:</h3>
                  <span
                    class="content__box-description content__box-description-in-list"
                  >
                    Nghe chính tả</span
                  >
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="content-right">
          <nav class="nav__content-right">
            <div
              class="nav__content-header-right hide-on-mobile hide-on-tablet"
            >
              <a href="" class="nav__content-link-right"
                >IELTS General Reading
              </a>
              <i class="nav__content-right__icon fa-solid fa-chevron-right"></i>
              <span class="nav__content-transition-right">Từ vựng TOEIC</span>
            </div>
            <label class="hide" for="nav-mobile-course-checkbox"
              ><i class="fa-solid fa-bars nav__icon"></i
            ></label>
          </nav>
          <input
            type="checkbox"
            id="nav-mobile-course-checkbox"
            class="nav-mobile-course__input"
          />
          <div class="nav__mobile-course hide">
            <div class="flex__container header__container">
              <a href="" class="content-left__header">IELTS General Reading</a>
              <a href="" class="content-left__dropleft">
                <label for="nav-mobile-course-checkbox"
                  ><i class="content-left__icon fa-solid fa-angle-left"></i
                ></label>
              </a>
            </div>
            <div class="course-learn__container">
              <ul class="course-learn__list">
                <li class="course-learn__item">
                  <a
                    href=""
                    class="course-learn__link course-learn__link--chosen"
                    >Từ vựng TOEIC</a
                  >
                </li>
                <li class="course-learn__item">
                  <a href="" class="course-learn__link">
                    Phương pháp làm các dạng câu hỏi trong IELTS General Reading
                  </a>
                </li>
                <li class="course-learn__item">
                  <a href="" class="course-learn__link">
                    Video chữa đề chi tiết
                  </a>
                </li>
                <li class="course-learn__item">
                  <a href="" class="course-learn__link"> PRACTICE ZONE </a>
                </li>
                <li class="course-learn__item">
                  <a href="" class="course-learn__link">
                    GT Practice Set 7 Test 1: Luyện tập từ vựng
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content-right__container">
            <div class="grid wide grid-wide-course-learn">
              <div class="content__box">
                <h3 class="translate__header">Sự xem trước, sự duyệt trước</h3>
                <p class="translate__hint">
                  Hint: = a chance to see something before it becomes generally
                  available
                </p>
                <div class="translate__input-container">
                  <input type="text" class="translate__input" />
                </div>
              </div>
              <div class="multichoice__option">
                <a href="" class="multichoice__option-link"
                  ><i class="fa-solid fa-angle-left"></i> Câu trước</a
                >
                <div class="multichoice__auto-container">
                  <input type="checkbox" id="multichoice__checkbox" />
                  <label for="multichoice__checkbox" class="multichoice__auto"
                    >Tự động chuyển câu</label
                  >
                </div>
                <a href="" class="multichoice__option-link"
                  >Câu sau <i class="fa-solid fa-angle-right"></i
                ></a>
              </div>
              <div class="content__box">
                <h3 class="multichoice__list-text">Danh sách bài tập:</h3>
                <div class="multichoice__list-box">
                  <a
                    href=""
                    class="multichoice__list-number multichoice__list-number--chosen"
                    >1</a
                  >
                  <a href="" class="multichoice__list-number">2</a>
                  <a href="" class="multichoice__list-number">3</a>
                  <a href="" class="multichoice__list-number">4</a>
                  <a href="" class="multichoice__list-number">5</a>
                  <a href="" class="multichoice__list-number">6</a>
                  <a href="" class="multichoice__list-number">7</a>
                  <a href="" class="multichoice__list-number">8</a>
                  <a href="" class="multichoice__list-number">9</a>
                  <a href="" class="multichoice__list-number">10</a>
                  <a href="" class="multichoice__list-number">11</a>
                  <a href="" class="multichoice__list-number">12</a>
                  <a href="" class="multichoice__list-number">13</a>
                  <a href="" class="multichoice__list-number">14</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}