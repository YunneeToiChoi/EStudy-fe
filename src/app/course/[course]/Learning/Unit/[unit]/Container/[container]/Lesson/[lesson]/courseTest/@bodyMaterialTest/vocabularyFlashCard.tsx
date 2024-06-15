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
  let NumberOfListCard;
  if(Array.isArray(ListFlashcard)){
    NumberOfListCard=ListFlashcard.length;
  }
  useEffect(()=>{
    getVocabOfLesson(idLesson,dispatch);
  },[dispatch])

    return(
          <>
          <Link href={`/course/${params.course}/Learning/Unit/${params.unit}/Container/${params.container}/Lesson/${params.lesson}/courseTest?TAG=flashCardDetail`} className=" block text-center no-underline text-black text-base border-[1px] border-primary-bg-color rounded p-3 bg-tag-search-bg-color font-semibold hover:text-white hover:bg-primary-bg-color-hover transition duration-300 mb-10">Luyện tập flashcards</Link>
          <p className="text-xl">List có {NumberOfListCard} từ</p>
          {ListFlashcard?.map((card:any)=>(
            <div key={card.vocabId} className="bg-white p-5 border-[1px] border-course-border-color rounded-xl shadow-md text-base my-[40px] w-full">
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
          <Link href="#" className="mt-[30px] text-base text-white bg-nav-hover-text-color px-[14px] py-[10px] rounded no-underline w-fit">1</Link>
          </>
    )
}