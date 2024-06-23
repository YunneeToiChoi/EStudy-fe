import  Link  from 'next/link';
import { useDispatch } from 'react-redux';
interface TranslateLearnProps{
  params:any
}
export const TranslateLearn: React.FC<TranslateLearnProps> = ({params})=>{
   const dispatch=useDispatch();
   const idLesson ={lessonId: params.lesson};
   console.log(idLesson);
    return(
        <div>
          <div className="content-right__container">
            <div className="grid wide grid-wide-course-learn">
              <div className="content__box">
                <h3 className="translate__header">Sự xem trước, sự duyệt trước</h3>
                <p className="translate__hint">
                  Hint: = a chance to see something behtmlFore it becomes generally
                  available
                </p>
                <div className="translate__input-container">
                  <input type="text" className="translate__input" />
                </div>
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