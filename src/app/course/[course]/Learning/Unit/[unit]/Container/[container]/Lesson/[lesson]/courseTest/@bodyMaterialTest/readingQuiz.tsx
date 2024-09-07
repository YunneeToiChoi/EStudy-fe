import React, { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';

interface ReadingQuizProps {
  params: any;
}

export const ReadingQuiz: React.FC<ReadingQuizProps> = ({ params }) => {
  const searchParams = useSearchParams();
  const tag = searchParams.get('TAG');
  const dispatch = useDispatch();
  const idLesson = { lessonId: params.lesson };
  
  // State để kiểm soát việc ẩn/hiện transcript và dịch nghĩa
  const [isTranscriptVisible, setTranscriptVisible] = useState(false);
  const [isTranslationVisible, setTranslationVisible] = useState(false);
  const [isAnswerChecked, setAnswerChecked] = useState(false); // State mới

  const handleTranscriptToggle = () => {
    setTranscriptVisible(!isTranscriptVisible);
  };

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
        <div className='flex mt-7 w-full gap-6'>
          <div className="w-1/2 bg-slate-100 p-7">
          <p>
          WXO Radio Turns 50!
          <br />
          On February 3 WXO Radio will celebrate its fiftieth anniversary. Thats half a century of stimulating _____(135). Over the years, we _____(136) our listeners breaking news, thought-provoking stories, and popular music from around the world. Now we invite you to celebrate with us during an open house from 5:00 P.M. to 6.30 P.M. on February 3 at our Eighth Street studio. Take a tour and see some of the behind-the-scenes magic. Watch a demonstration of our digital audio equipment. _____(137). The open house is free, but registration is required. We hope you can join us for this _____(138) occasion.
          </p>
          <button className="transcript cursor-pointer" onClick={handleTranscriptToggle}>
                Dịch nghĩa <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className={` bg-tag-search-text-color  transition-all duration-500 ease-in-out overflow-hidden rounded-xl ${isTranscriptVisible ? 'max-h-[1000px] border-[1px] border-black' : 'max-h-0 border-0'}`}>
                <span className=' w-full h-full block px-5 py-3'>
                Im glad your store carries the new EPG8 smartphone. Ive
                been waiting a long time to get it. <br />Yes, theres
                been a lot of interest in this phone. <br />What colors
                does it come in? <br />Three: white, black, and gold.
                However, since the phone has been in such high demand, our
                store doesnt have all three colors in stock now.
                <br />Oh. What colors do you have? <br />
                </span>
              </div>
          </div>
          <div className="w-1/2">
            <input
              type="radio"
              id="A"
              name="fav_language"
              value=""
            />
            <label className='pl-2 cursor-pointer' htmlFor="A">A. <span>special</span></label><br />
            <input
              type="radio"
              id="B"
              name="fav_language"
              value="B"
            />
            <label className='pl-2 cursor-pointer' htmlFor="B">B. <span>specialize</span></label><br />
            <input
              type="radio"
              id="C"
              name="fav_language"
              value="C"
            />
            <label className='pl-2 cursor-pointer' htmlFor="C">C. <span>especially</span></label><br />
            <input
              type="radio"
              id="D"
              name="fav_language"
              value="D"
            />
            <label className='pl-2 cursor-pointer' htmlFor="D">D. <span>specialization</span></label>
            <input
              type="checkbox"
              id="answer__checkbox"
              className="answer__checkbox"
            />
             <div className={isAnswerChecked ? 'block':'hidden'}>
              <button className="transcript cursor-pointer" onClick={handleTranslationToggle}>
                Giải thích đáp án <i className="fa-solid fa-chevron-down"></i>
              </button>
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
