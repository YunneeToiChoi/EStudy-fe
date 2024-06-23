import  Link  from 'next/link';
import { useDispatch } from 'react-redux';
interface GrammarChoiceProps {
  params: any;
}
export const GrammarChoice: React.FC<GrammarChoiceProps> =({params})=>{
  const dispatch = useDispatch();
  const idLesson={lessonId:Number(params.lesson)};
    return(
        <div>
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