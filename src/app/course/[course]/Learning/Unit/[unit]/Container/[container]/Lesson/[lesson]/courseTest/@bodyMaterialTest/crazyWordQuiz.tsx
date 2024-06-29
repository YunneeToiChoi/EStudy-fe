import React, { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';

interface CrazyWordQuizProps {
  params: any;
}

export const CrazyWordQuiz: React.FC<CrazyWordQuizProps> = ({ params }) => {
  const searchParams = useSearchParams();
  const tag = searchParams.get('TAG');
  const dispatch = useDispatch();
  const idLesson = { lessonId: params.lesson };
  
  const [isTranslationVisible, setTranslationVisible] = useState(false);
  const [isAnswerChecked, setAnswerChecked] = useState(false); 

  const handleTranslationToggle = () => {
    setTranslationVisible(!isTranslationVisible);
  };

  const handleAnswerCheck = () => {
    setAnswerChecked(true);
  };

  const handleClearAnswer = () => {
    setAnswerChecked(false);
    const radioButtons = document.querySelectorAll('input[name="fav_language"]');
    radioButtons.forEach((radio: any) => (radio.checked = false));
  };

  return (
    <div>
      <div className="bg-white shadow-xl rounded-xl p-9 my-9">
        <div className='flex gap-4'>
          <button className="py-2 px-4 bg-blue-100 text-base text-nav-hover-text-color rounded-sm shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-1 ease-in-out cursor-pointer flex gap-2 w-fit items-center" 
          onClick={handleAnswerCheck}>
            <i className="fa-regular fa-circle-check"></i>
            kiểm tra đáp án
          </button>
          <button className="py-2 px-4 bg-white text-base text-nav-hover-text-color rounded-sm shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-1 ease-in-out cursor-pointer flex gap-2 w-fit items-center"
          onClick={handleClearAnswer}>
            <i className="fa-regular fa-circle-xmark"></i>
            Xoá hết
          </button>
        </div>
        <div className="w-full my-4">
          <p>The manager often leads new employees through the safety procedures _____</p>
        </div>
        <div className='flex w-full gap-6'>
          <div className="w-full">
            <input
              type="radio"
              id="A"
              name="fav_language"
              value=""
            />
            <label className='pl-2 cursor-pointer' htmlFor="A">A. <span>her</span></label><br />
            <input
              type="radio"
              id="B"
              name="fav_language"
              value="B"
            />
            <label className='pl-2 cursor-pointer' htmlFor="B">B. <span>herself</span></label><br />
            <input
              type="radio"
              id="C"
              name="fav_language"
              value="C"
            />
            <label className='pl-2 cursor-pointer' htmlFor="C">C. <span>hers</span></label><br />
            <input
              type="radio"
              id="D"
              name="fav_language"
              value="D"
            />
            <label className='pl-2 cursor-pointer' htmlFor="D">D. <span>she</span></label>
            <input
              type="checkbox"
              id="answer__checkbox"
              className="answer__checkbox"
            />
             <div className={isAnswerChecked ? 'block':'hidden'}>
              <div className="transcript cursor-pointer" onClick={handleTranslationToggle}>
                Giải thích đáp án <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div className={` bg-tag-search-text-color  transition-all duration-500 ease-in-out overflow-hidden rounded-xl ${isTranslationVisible ? 'max-h-[1000px] border-[1px] border-black' : 'max-h-0 border-0'}`}>
              <span className=' w-full h-full block px-5 py-3'>
              Tôi rất vui vì cửa hàng của bạn có bán chiếc điện thoại EPG8 mới. Tôi đã chờ đợi rất lâu để có được nó. <br />Vâng, có rất nhiều người quan tâm đến chiếc điện thoại này. <br />Nó có những màu nào? <br />Ba màu: trắng, đen và vàng. Tuy nhiên, vì điện thoại này rất được ưa chuộng, cửa hàng của chúng tôi hiện không có đủ ba màu. <br />Ồ. Vậy bạn có màu nào? <br />
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="multichoice__option">
        <a href="" className="multichoice__option-link">
          <i className="fa-solid fa-angle-left"></i> Câu trước
        </a>
        <div className="multichoice__auto-container">
          <input type="checkbox" id="multichoice__checkbox" />
          <label htmlFor="multichoice__checkbox" className="multichoice__auto">
            Tự động chuyển câu
          </label>
        </div>
        <a href="" className="multichoice__option-link">
          Câu sau <i className="fa-solid fa-angle-right"></i>
        </a>
      </div>
      <div className="content__box">
        <h3 className="multichoice__list-text">Danh sách bài tập:</h3>
        <div className="multichoice__list-box">
          <a href="" className="multichoice__list-number multichoice__list-number--chosen">1</a>
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
  );
};
