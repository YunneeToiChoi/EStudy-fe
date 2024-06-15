import { useState } from 'react';
export default function FlashcardDetail(){
  const [isRotated, setIsRotated] = useState(false);

  // Hàm xử lý sự kiện click
  const handleClick = () => {
    setIsRotated(!isRotated); // Đảo ngược giá trị của state
  };
    return (
      <>
       <div className="content-right__container">
          <div className="grid wide grid-wide-course-learn">
            <div className="train__flex-container">
              <a
                href=""
                className="flashcard__train-link flashcard__train-link--random"
              >
                Xem tất cả</a
              >
              <a
                href=""
                className="flashcard__train-link flashcard__train-link--stop"
              >
                <i className="fa-solid fa-ban flashcard__train-icon"></i> Dừng học
                list từ này</a
              >
            </div>
            <div className="aleart__box">
              <p className="aleart__text">
                Chú ý: bạn đã học xong số lượng từ cần ôn tập trong hôm nay.
                Bạn có thể dừng lại việc ôn tập và quay lại vào hôm sau. TUY
                NHIÊN, nếu bây giờ bạn vẫn muốn ôn tập tiếp, các từ bạn đang
                học sẽ xuất hiện NGẪU NHIÊN ở dưới.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-xl my-7 h-[365px] w-[650px] relative cursor-pointer mx-auto" onClick={handleClick}>
              <div className={`flashcard ease-in-out h-full ${isRotated ? 'toTateY-180' : ''}`}>
                  <div className=" absolute h-full py-4 px-8 top-0 bottom-0 right-0 left-0 flex w-full z-[2] flex-col justify-center items-center backface toTateX-0">
                      <div className="vocab__flashcard-container">
                          <div>
                              <span className="vocab__text">elevator</span>
                              <a href="#" className="vocabulary__speaker">
                                  <i className="fa-solid fa-volume-high vocabulary__content-icon"></i>
                              </a>
                              <span className="vocabulary__national">UK</span>
                              <a href="#" className="vocabulary__speaker">
                                  <i className="fa-solid fa-volume-high vocabulary__content-icon"></i>
                              </a>
                              <span className="vocabulary__national">US</span>
                          </div>
                          <div>
                              <p className="vocab__spelling">(n) /elɪveɪtər/</p>
                          </div>
                      </div>
                  </div>
                  <div className=" absolute h-full py-4 px-8 top-0 bottom-0 right-0 left-0 flex w-full justify-center items-center  backface toTateY-180">
                      <div className="vocab__flashcard-translate-left">
                          <b>Định nghĩa:</b>
                          <p>hóa đơn</p>
                          <p>=proof of payment</p>
                          <b>Ví dụ:</b>
                          <ul className="vocab__flashcard-list">
                              <li>
                                  Make sure you are given a [receipt] for everything you buy. (=Dịch: Hãy chắc chắn rằng bạn nhận được biên lai cho mọi thứ bạn mua.)
                              </li>
                              <li>
                                  More retailers are switching to email [receipts] instead of paper. (=Dịch: Nhiều nhà bán lẻ đang chuyển sang biên nhận qua email thay vì giấy.)
                              </li>
                              <li>
                                  If you ve got your [receipt] you can usually exchange the goods. (=Dịch: Nếu bạn đã nhận được biên nhận, bạn thường có thể đổi hàng.)
                              </li>
                          </ul>
                      </div>
                  </div>
              </div> 
            </div>
            <div className="content__box">
              <div className="vocabulary__container rate__container">
                <div className="vocab__flashcard-container--rate">
                  <div
                    className="vocab__rate-category vocab__rate-category--easy"
                  >
                    <i className="fa-regular fa-face-smile"></i>
                    <p className="vocab__rate-text">Dễ</p>
                  </div>
                  <div
                    className="vocab__rate-category vocab__rate-category--medium"
                  >
                    <i className="fa-regular fa-face-meh"></i>
                    <p className="vocab__rate-text">Trung bình</p>
                  </div>
                  <div
                    className="vocab__rate-category vocab__rate-category--hard"
                  >
                    <i className="fa-regular fa-face-tired"></i>
                    <p className="vocab__rate-text">Khó</p>
                  </div>
                  <div className="vocab__rate-category">
                    <i className="fa-solid fa-forward-step"></i>
                    <p className="vocab__rate-text">Đã biết, loại khỏi</p>
                    <p>danh sách ôn tập</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}