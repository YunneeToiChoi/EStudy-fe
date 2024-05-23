import "./flashCard.css"
import Image from "next/image";
export default function FlashCard(){
    return(
       <div>
         <div className=" px-9 py-[40px] rounded-lg bg-gradient-to-r from-primary-bg-color to-[#9ceaef]">
        <div className="">
          <div className="">
            <h2 className=" text-3xl font-bold text-white">
              <i className="fa-solid fa-tv flashcard__icon"></i>Flashcards
            </h2>
            <a href="" className=" mt-[40px] no-underline p-2 rounded-xl text-base text-primary-bg-color bg-white inline-block hover:bg-slate-100 font-medium">Khám phá</a>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flashcard__content">
          <div className="">
            <p className=" p-4 rounded-[6px] text-base bg-alert-flashcard-color my-5 text-alert-text-color">
              Chú ý: Bạn có thể tạo flashcards từ highlights (bao gồm các
              highlights các bạn đã tạo trước đây) trong trang chi tiết kết quả
              bài thi. <a href="" className="alert__link">Xem hướng dẫn</a>.
            </p>
            <div className=" my-5">
              <div className="">
                <div className="grid grid-cols-5 gap-5">
                  <a href="#" className="border-[1px] border-course-border-color bg-[#f8f9fa] p-5 rounded-xl mb-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out ">
                    <div className="">
                      <h4 className=" text-base font-medium">
                        Cambridge Vocabulary for IELTS (20 units)
                      </h4>
                      <div className=" text-sm text-exam-text-color my-3 flex justify-between items-center w-full">
                        <div>
                        <i className="fa-solid fa-tv"></i>
                        <span className=" ml-2 text-sm">1716 từ</span>
                        </div>
                        <div>
                           <i className="fa-solid fa-user-pen"></i>
                        <span className=" ml-2 text-sm">297723</span>
                        </div>
                       
                      </div>
                      <div className=" flex items-center">
                        <Image
                          width={30}
                          height={30}
                          src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/440441668_2839137929569944_3273543100897021092_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gNG57XRNeaEQ7kNvgEYn11P&_nc_ht=scontent.fsgn5-15.fna&oh=00_AYCiNe02zy_zkmP8ShYIJk3FLW4FqV_s8DdjIw5aXoOi8A&oe=66437E75"
                          alt=""
                          className="flashcard__img"
                        />
                        <span className="flashcard__name">study4</span>
                      </div>
                    </div>
                  </a>
                  <a href="#" className=" ">
                    <div className="exam__box">
                      <h4 className="exam__box-title flashcard__box-title">
                        Cambridge Vocabulary for IELTS (20 units)
                      </h4>
                      <div className="exam__details">
                        <i className="fa-solid fa-tv"></i>
                        <span className="exam__text">1716 từ |</span>
                        <i className="fa-solid fa-user-pen"></i>
                        <span className="exam__text">297723</span>
                      </div>
                      <div className="flashcard__create-by">
                        <Image
                          width={30}
                          height={30}
                          src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/440441668_2839137929569944_3273543100897021092_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gNG57XRNeaEQ7kNvgEYn11P&_nc_ht=scontent.fsgn5-15.fna&oh=00_AYCiNe02zy_zkmP8ShYIJk3FLW4FqV_s8DdjIw5aXoOi8A&oe=66437E75"
                          alt=""
                          className="flashcard__img"
                        />
                        <span className="flashcard__name">study4</span>
                      </div>
                    </div>
                  </a>
                  <a href="#" className=" ">
                    <div className="exam__box">
                      <h4 className="exam__box-title flashcard__box-title">
                        Cambridge Vocabulary for IELTS (20 units)
                      </h4>
                      <div className="exam__details">
                        <i className="fa-solid fa-tv"></i>
                        <span className="exam__text">1716 từ |</span>
                        <i className="fa-solid fa-user-pen"></i>
                        <span className="exam__text">297723</span>
                      </div>
                      <div className="flashcard__create-by">
                        <Image
                          width={30}
                          height={30}
                          src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/440441668_2839137929569944_3273543100897021092_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gNG57XRNeaEQ7kNvgEYn11P&_nc_ht=scontent.fsgn5-15.fna&oh=00_AYCiNe02zy_zkmP8ShYIJk3FLW4FqV_s8DdjIw5aXoOi8A&oe=66437E75"
                          alt=""
                          className="flashcard__img"
                        />
                        <span className="flashcard__name">study4</span>
                      </div>
                    </div>
                  </a>
                  <a href="#" className=" ">
                    <div className="exam__box">
                      <h4 className="exam__box-title flashcard__box-title">
                        Cambridge Vocabulary for IELTS (20 units)
                      </h4>
                      <div className="exam__details">
                        <i className="fa-solid fa-tv"></i>
                        <span className="exam__text">1716 từ |</span>
                        <i className="fa-solid fa-user-pen"></i>
                        <span className="exam__text">297723</span>
                      </div>
                      <div className="flashcard__create-by">
                        <Image
                          width={30}
                          height={30}
                          src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/440441668_2839137929569944_3273543100897021092_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gNG57XRNeaEQ7kNvgEYn11P&_nc_ht=scontent.fsgn5-15.fna&oh=00_AYCiNe02zy_zkmP8ShYIJk3FLW4FqV_s8DdjIw5aXoOi8A&oe=66437E75"
                          alt=""
                          className="flashcard__img"
                        />
                        <span className="flashcard__name">study4</span>
                      </div>
                    </div>
                  </a>
                  <a href="#" className=" ">
                    <div className="exam__box">
                      <h4 className="exam__box-title flashcard__box-title">
                        Cambridge Vocabulary for IELTS (20 units)
                      </h4>
                      <div className="exam__details">
                        <i className="fa-solid fa-tv"></i>
                        <span className="exam__text">1716 từ |</span>
                        <i className="fa-solid fa-user-pen"></i>
                        <span className="exam__text">297723</span>
                      </div>
                      <div className="flashcard__create-by">
                        <Image
                          width={30}
                          height={30}
                          src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/440441668_2839137929569944_3273543100897021092_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gNG57XRNeaEQ7kNvgEYn11P&_nc_ht=scontent.fsgn5-15.fna&oh=00_AYCiNe02zy_zkmP8ShYIJk3FLW4FqV_s8DdjIw5aXoOi8A&oe=66437E75"
                          alt=""
                          className="flashcard__img"
                        />
                        <span className="flashcard__name">study4</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       </div>
    )
}