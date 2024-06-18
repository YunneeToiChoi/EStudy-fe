import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestionOfLesson } from "@/service/api/apiQuestionRequest";
import { useSearchParams } from 'next/navigation';

interface MultiChoiceProps {
  params: any;
}

export const MultiChoiceLearn: React.FC<MultiChoiceProps> = ({ params }) => {
  const searchParams = useSearchParams();
  const tag = searchParams.get('TAG');
  const dispatch = useDispatch();
  const idLesson = { lessonId: params.lesson };
  const ListQuestion = useSelector((state: any) => state.ThunkReducer?.question?.questions?.data?.allQuestionOfLesson);
  const tagCheck= useSelector((state: any) => state.ThunkReducer?.question?.questions?.data?.lessonTag?.lessonTag);

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [autoMove, setAutoMove] = useState(false);

  useEffect(() => {
    getAllQuestionOfLesson(idLesson, dispatch);
  }, [dispatch,tagCheck]);

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (ListQuestion && currentPage < ListQuestion.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const handleAutoMoveChange = () => {
    setAutoMove(!autoMove);
  };

  const currentQuestion = ListQuestion ? ListQuestion[currentPage] : null;

  const handleAnswerClick = (answer: string) => {
  setSelectedAnswer(answer);
  if (currentQuestion && currentQuestion.correctAnswer === answer && autoMove) {
    setTimeout(() => {
      handleNext(); 
    }, 1000);
  }
};

  const isAnswerCorrect = (answer: string) => {
    return currentQuestion && currentQuestion.correctAnswer === answer;
  };
  
  if(tagCheck!==tag){
    return <div>Page không tồn tại</div>
  }

  return (
        <>
        {currentQuestion && (
          <div className="content__box bg-white p-10 my-4 rounded-xl shadow-xl">
            <h3 className="multichoice__header">
              {currentQuestion.questionText}
            </h3>
            <p className="multichoice__hint">
             hint: ={currentQuestion.questionTranslate}
            </p>
            <div className="multichoice__box">
              <div className="multichoice__answer">
                <div className={`multichoice__link cursor-pointer ${selectedAnswer === currentQuestion.optionA ? (isAnswerCorrect(currentQuestion.optionA) ? ' bg-green-500' : ' bg-red-600') : ''}`} onClick={() => handleAnswerClick(currentQuestion.optionA)}>{currentQuestion.optionA}</div>
                <div className={`multichoice__link cursor-pointer ${selectedAnswer === currentQuestion.optionB ? (isAnswerCorrect(currentQuestion.optionB) ? 'bg-green-500' : ' bg-red-600') : ''}`} onClick={() => handleAnswerClick(currentQuestion.optionB)}>{currentQuestion.optionB}</div>
                <div className={`multichoice__link cursor-pointer ${selectedAnswer === currentQuestion.optionC ? (isAnswerCorrect(currentQuestion.optionC) ? 'bg-green-500' : ' bg-red-600') : ''}`} onClick={() => handleAnswerClick(currentQuestion.optionC)}>{currentQuestion.optionC}</div>
                <div className={`multichoice__link cursor-pointer ${selectedAnswer === currentQuestion.optionD ? (isAnswerCorrect(currentQuestion.optionD) ? 'bg-green-500' : ' bg-red-600') : ''}`} onClick={() => handleAnswerClick(currentQuestion.optionD)}>{currentQuestion.optionD}</div>
              </div>
            </div>
          </div>
        )}
        <div className="multichoice__option">
          <button onClick={handlePrevious} className={`multichoice__option-link ${currentPage === 0 ? ' invisible':''}`} disabled={currentPage === 0}>
            <i className="fa-solid fa-angle-left"></i> Câu trước
          </button>
          <div className="multichoice__auto-container">
            <input type="checkbox" id="multichoice__checkbox" checked={autoMove} onChange={handleAutoMoveChange} />
            <label htmlFor="multichoice__checkbox" className="multichoice__auto">
              Tự động chuyển câu
            </label>
          </div>
          <button onClick={handleNext} className={`multichoice__option-link ${!ListQuestion || currentPage === ListQuestion.length - 1 ?' invisible':''}`} disabled={!ListQuestion || currentPage === ListQuestion.length - 1}>
            Câu sau <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
        <div className="content__box">
          <h3 className="multichoice__list-text">Danh sách bài tập:</h3>
          <div className="multichoice__list-box cursor-pointer">
            {ListQuestion && ListQuestion.map((_:any, index:any) => (
              <div key={index} onClick={() => handlePageClick(index)} className={`multichoice__list-number ${index === currentPage ? 'multichoice__list-number--chosen' : ''}`}>
                {index + 1}
              </div>
            ))}
          </div>
        </div>
        </>
  );
};
