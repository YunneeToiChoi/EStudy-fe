import  Link  from 'next/link';
import Image from 'next/image';
export default function VocabularyFlashCard(){
    return(
        <div>
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
              <Link href="" className="flashcard__train">Luyện tập flashcards</Link>
              <div className="train__flex-container">
                <Link
                  href=""
                  className="flashcard__train-link flashcard__train-link--random"
                >
                  <i className="fa-solid fa-shuffle flashcard__train-icon"></i> Xem
                  ngẫu nhiên</Link>
                <Link
                  href=""
                  className="flashcard__train-link flashcard__train-link--stop"
                >
                  <i className="fa-solid fa-ban flashcard__train-icon"></i> Dừng học
                  list từ này</Link>
              </div>
              <div className="content__box">
                <div className="vocabulary__total-container">
                  <div className="vocabulary__total-box">
                    <p className="vocabulary__total-text">55</p>
                    <p className="vocabulary__total-description">Tổng số từ</p>
                  </div>
                  <div className="vocabulary__total-box">
                    <p className="vocabulary__total-text">55</p>
                    <p className="vocabulary__total-description">Đã học</p>
                  </div>
                  <div className="vocabulary__total-box">
                    <p className="vocabulary__total-text">55</p>
                    <p className="vocabulary__total-description">Đã nhớ</p>
                  </div>
                  <div className="vocabulary__total-box">
                    <p
                      className="vocabulary__total-text vocabulary__total-text-red"
                    >
                      0
                    </p>
                    <p className="vocabulary__total-description">Cần ôn tập</p>
                  </div>
                </div>
              </div>
              <p className="vocabulary__description">List có 55 từ</p>
              <div className="content__box">
                <div className="vocabulary__container row">
                  <div className="col l-8">
                    <div className="vocabulary__flex-header">
                      <h2 className="vocabulary__content-header">
                        accountant (n) /ə&apos;kaʊntənt/
                      </h2>
                      <Link href="#" className="vocabulary__speaker">
                        <i
                          className="fa-solid fa-volume-high vocabulary__content-icon"
                        ></i>
                      </Link>
                      <span className="vocabulary__national">UK</span>
                      <Link href="#" className="vocabulary__speaker">
                        <i
                          className="fa-solid fa-volume-high vocabulary__content-icon"
                        ></i>
                      </Link>
                      <span className="vocabulary__national">US</span>
                    </div>
                    <div className="vocabulary__study">
                      <h4 className="vocabulary__study-header">Định nghĩa:</h4>
                      <p className="vocabulary__study-content">
                        một người chịu trách nhiệm về tiền trong một doanh
                        nghiệp, kế toán = a person responsible htmlFor the money in
                        a business
                      </p>
                      <br />
                      <h4 className="vocabulary__study-header">Ví dụ:</h4>
                      <ul className="vocabulary__study-list">
                        <li className="vocabulary__study-item">
                          My [accountant] takes care of my taxes (=Dịch: Kế toán
                          viên của tôi lo việc đóng thuế cho tôi)
                        </li>
                        <li className="vocabulary__study-item">
                          Many [accountants] made it to the board having
                          previously served as senior executives (=Dịch: Nhiều
                          kế toán viên đã lọt vào hội đồng quản trị trước đây
                          từng giữ chức vụ điều hành cấp cao)
                        </li>
                        <li className="vocabulary__study-item">
                          My [accountant] takes care of my taxes. (=Dịch: Kế
                          toán viên của tôi lo việc đóng thuế cho tôi.)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col l-4">
                    <Image
                      width={100}
                      height={100}
                      src="https://study4.com/media/toeic_course_vocabs/media/02_Accounting.jpg.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="content__box">
                <div className="vocabulary__container row">
                  <div className="col l-8">
                    <div className="vocabulary__flex-header">
                      <h2 className="vocabulary__content-header">
                        accountant (n) /ə&apos;kaʊntənt/
                      </h2>
                      <Link href="#" className="vocabulary__speaker">
                        <i
                          className="fa-solid fa-volume-high vocabulary__content-icon"
                        ></i>
                      </Link>
                      <span className="vocabulary__national">UK</span>
                      <Link href="#" className="vocabulary__speaker">
                        <i
                          className="fa-solid fa-volume-high vocabulary__content-icon"
                        ></i>
                      </Link>
                      <span className="vocabulary__national">US</span>
                    </div>
                    <div className="vocabulary__study">
                      <h4 className="vocabulary__study-header">Định nghĩa:</h4>
                      <p className="vocabulary__study-content">
                        một người chịu trách nhiệm về tiền trong một doanh
                        nghiệp, kế toán = a person responsible htmlFor the money in
                        a business
                      </p>
                      <br />
                      <h4 className="vocabulary__study-header">Ví dụ:</h4>
                      <ul className="vocabulary__study-list">
                        <li className="vocabulary__study-item">
                          My [accountant] takes care of my taxes (=Dịch: Kế toán
                          viên của tôi lo việc đóng thuế cho tôi)
                        </li>
                        <li className="vocabulary__study-item">
                          Many [accountants] made it to the board having
                          previously served as senior executives (=Dịch: Nhiều
                          kế toán viên đã lọt vào hội đồng quản trị trước đây
                          từng giữ chức vụ điều hành cấp cao)
                        </li>
                        <li className="vocabulary__study-item">
                          My [accountant] takes care of my taxes. (=Dịch: Kế
                          toán viên của tôi lo việc đóng thuế cho tôi.)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col l-4">
                    <Image
                      width={100}
                      height={100}
                      src="https://study4.com/media/toeic_course_vocabs/media/02_Accounting.jpg.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="content__box">
                <div className="vocabulary__container row">
                  <div className="col l-8">
                    <div className="vocabulary__flex-header">
                      <h2 className="vocabulary__content-header">
                        accountant (n) /ə&apos;kaʊntənt/
                      </h2>
                      <Link href="#" className="vocabulary__speaker">
                        <i
                          className="fa-solid fa-volume-high vocabulary__content-icon"
                        ></i>
                      </Link>
                      <span className="vocabulary__national">UK</span>
                      <Link href="#" className="vocabulary__speaker">
                        <i
                          className="fa-solid fa-volume-high vocabulary__content-icon"
                        ></i>
                      </Link>
                      <span className="vocabulary__national">US</span>
                    </div>
                    <div className="vocabulary__study">
                      <h4 className="vocabulary__study-header">Định nghĩa:</h4>
                      <p className="vocabulary__study-content">
                        một người chịu trách nhiệm về tiền trong một doanh
                        nghiệp, kế toán = a person responsible htmlFor the money in
                        a business
                      </p>
                      <br />
                      <h4 className="vocabulary__study-header">Ví dụ:</h4>
                      <ul className="vocabulary__study-list">
                        <li className="vocabulary__study-item">
                          My [accountant] takes care of my taxes (=Dịch: Kế toán
                          viên của tôi lo việc đóng thuế cho tôi)
                        </li>
                        <li className="vocabulary__study-item">
                          Many [accountants] made it to the board having
                          previously served as senior executives (=Dịch: Nhiều
                          kế toán viên đã lọt vào hội đồng quản trị trước đây
                          từng giữ chức vụ điều hành cấp cao)
                        </li>
                        <li className="vocabulary__study-item">
                          My [accountant] takes care of my taxes. (=Dịch: Kế
                          toán viên của tôi lo việc đóng thuế cho tôi.)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col l-4">
                    <Image
                      width={100}
                      height={100}
                      src="https://study4.com/media/toeic_course_vocabs/media/02_Accounting.jpg.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <Link href="" className="content__transition-number">1</Link>
            </div>
          </div>
        </div>
    )
}