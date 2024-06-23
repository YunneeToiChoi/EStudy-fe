import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVocabListen } from '@/service/api/apiVocabRequest';
import { useSearchParams } from 'next/navigation';

interface PictureQuizProps {
  params: any;
}

export const PictureQuiz: React.FC< PictureQuizProps> = ({ params }) => {
  const searchParams = useSearchParams();
  const tag = searchParams.get('TAG');
  const dispatch = useDispatch();
  const idLesson = { lessonId: params.lesson };
  const ListChunk = useSelector((state: any) => state.ThunkReducer?.vocab?.VocabListen?.data?.data);
  const tagCheck = useSelector((state: any) => state.ThunkReducer?.vocab?.VocabListen?.data?.lessonTag?.lessonTag);

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedVocab, setSelectedVocab] = useState<number | null>(null);
  const [feedbackIndices, setFeedbackIndices] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [autoMove, setAutoMove] = useState(false); // State để lưu trạng thái của checkbox
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null); // State để lưu trữ tạm thời index được highlight

  const audioRef = useRef<HTMLAudioElement | null>(null);

  return (
    <div>
      <div className="">
        <div className="flex flex-col gap-11 items-center justify-center">
          <div className='w-[800px] p-10 bg-white rounded-xl shadow-2xl'>
              <audio ref={audioRef}  className="spell__audio my-10" controls>
                <source src="" type="audio/mpeg" />
              </audio>
            </div>
          </div>
          <div className="multichoice__option w-full">
            <button  className={`multichoice__option-link ${currentPage === 0 ? 'invisible' : ''}`} disabled={currentPage === 0}>
              <i className="fa-solid fa-angle-left"></i> Câu trước
            </button>
            <div className="multichoice__auto-container">
              <input 
                type="checkbox" 
                id="multichoice__checkbox" 
              />
              <label htmlFor="multichoice__checkbox" className="multichoice__auto">Tự động chuyển câu</label>
            </div>
            <button 
               
              className={`multichoice__option-link ${!ListChunk || currentPage === ListChunk.length - 1  ? 'invisible' : ''}`} 
              disabled={!ListChunk || currentPage === ListChunk.length - 1}
            >
              Câu sau <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
          <div className="content__box">
            <h3 className="multichoice__list-text">Danh sách bài tập:</h3>
            <div className="multichoice__list-box cursor-pointer">
              {ListChunk && ListChunk.map((_: any, index: number) => (
                <div key={index}  className={`multichoice__list-number ${index === currentPage ? 'multichoice__list-number--chosen' : ''}`}>
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};
