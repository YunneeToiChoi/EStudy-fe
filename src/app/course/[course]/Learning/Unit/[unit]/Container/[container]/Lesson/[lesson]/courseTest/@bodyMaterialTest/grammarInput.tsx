import  Link  from 'next/link';
import { useDispatch } from 'react-redux';

interface GrammarChoiceProps{
  params:any
}

export const GrammarInput : React.FC<GrammarChoiceProps> = ({params})=>{
  const dispatch= useDispatch();
  const idLesson ={lessonId: params.lesson};
    return(
        <div>
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