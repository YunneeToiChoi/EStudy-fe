import  Link  from 'next/link';
import { useDispatch } from 'react-redux';
import {BreadcrumbWithCustomSeparator} from '@/components/handicraft/params/paramsFindPairLearn';
import {getVocabFindPair} from "@/service/api/apiVocabRequest"

interface findPairProps {
  params: any;
}
export const FindPairLearn: React.FC<findPairProps> = ({ params }) =>{
  const dispatch= useDispatch(); 
  const idLesson ={lessonId: Number(params.lesson)};
  getVocabFindPair(idLesson,dispatch);
  return(
        <div>
             <nav className="nav__content-right">
            <BreadcrumbWithCustomSeparator></BreadcrumbWithCustomSeparator>
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
              <div className="content__box row">
                <Link href="" className="paircard__box col l-3"
                  >thang máy =a machine that takes people to different floors in
                  a building</Link>
                <Link
                  href=""
                  className="paircard__box paircard__box-volcabulary col l-3"
                  >Workshop</Link>
                <Link href="" className="paircard__box col l-3"
                  >thang máy =a machine that takes people to different floors in
                  a building</Link>
                <Link
                  href=""
                  className="paircard__box paircard__box-volcabulary col l-3"
                  >Workshop</Link>
                <Link href="" className="paircard__box col l-3"
                  >thang máy =a machine that takes people to different floors in
                  a building</Link>
                <Link
                  href=""
                  className="paircard__box paircard__box-volcabulary col l-3"
                  >Workshop</Link>
                <Link href="" className="paircard__box col l-3"
                  >thang máy =a machine that takes people to different floors in
                  a building</Link>
                <Link
                  href=""
                  className="paircard__box paircard__box-volcabulary col l-3"
                  >Workshop</Link>
              </div>
              <div className="multichoice__option">
                <Link href="" className="multichoice__option-link"
                  ><i className="fa-solid fa-angle-left"></i> Câu trước</Link>
                <div className="multichoice__auto-container">
                  <input type="checkbox" id="multichoice__checkbox" />
                  <label htmlFor="multichoice__checkbox" className="multichoice__auto"
                    >Tự động chuyển câu</label
                  >
                </div>
                <Link href="" className="multichoice__option-link"
                  >Câu sau <i className="fa-solid fa-angle-right"></i
                ></Link>
              </div>
              <div className="content__box">
                <h3 className="multichoice__list-text">Danh sách bài tập:</h3>
                <div className="multichoice__list-box">
                  <Link
                    href=""
                    className="multichoice__list-number multichoice__list-number--chosen"
                    >1</Link>
                  <Link href="" className="multichoice__list-number">2</Link>
                  <Link href="" className="multichoice__list-number">3</Link>
                  <Link href="" className="multichoice__list-number">4</Link>
                  <Link href="" className="multichoice__list-number">5</Link>
                  <Link href="" className="multichoice__list-number">6</Link>
                  <Link href="" className="multichoice__list-number">7</Link>
                  <Link href="" className="multichoice__list-number">8</Link>
                  <Link href="" className="multichoice__list-number">9</Link>
                  <Link href="" className="multichoice__list-number">10</Link>
                  <Link href="" className="multichoice__list-number">11</Link>
                  <Link href="" className="multichoice__list-number">12</Link>
                  <Link href="" className="multichoice__list-number">13</Link>
                  <Link href="" className="multichoice__list-number">14</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}