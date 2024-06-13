import  Link  from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getVocabOfLesson} from "@/service/api/apiVocabRequest"
interface VocabFlashcardProps {
  params: any;
}
export const VocabularyFlashCard: React.FC<VocabFlashcardProps> = ({ params }) =>{
  const dispatch= useDispatch(); 
  const idLesson ={lessonId: Number(params.lesson)}; 
  const ListFlashcard= useSelector((state:any)=> state.ThunkReducer?.vocab?.VocabByLesson?.data?.data)
  console.log(ListFlashcard)
  useEffect(()=>{
    getVocabOfLesson(idLesson,dispatch);
  },[dispatch])

    return(
        <div className="grid wide grid-wide-course-learn pb-6">
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
          {ListFlashcard?.map((card:any)=>(
            <div className="content__box">
            <div className="vocabulary__container row">
              <div className="col l-8">
                <div className="vocabulary__flex-header">
                  <h2 className="vocabulary__content-header">
                    {card.vocabTitle}
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
                    {card.mean}
                  </p>
                  <br />
                  <h4 className="vocabulary__study-header">Ví dụ:</h4>
                  {card.example}
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
          ))}
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
          <Link href="#" className="mt-[30px] text-base text-white bg-nav-hover-text-color px-[14px] py-[10px] rounded no-underline w-fit">1</Link>
        </div>
    )
}