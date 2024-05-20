import Image from 'next/image';
import  Link  from 'next/link';
export default function Home() {
  return (
    <div>
      <div className="flex gap-5 items-center">
        <div className='w-3/6 flex flex-col justify-start gap-3'>
          <span className=' font-semibold text-5xl text-black tracking-wide'>Welcome to the</span>
          <span className='font-semibold text-5xl text-primary-bg-color tracking-wide'>Learning English</span>
          <span className=' font-medium text-slate-400 text-[16px] mt-7 tracking-normal leading-7'>Trang web của chúng tôi cung cấp các khóa học trực tuyến chất lượng cao và dịch vụ thi thử, giúp bạn dễ dàng nâng cao kiến thức và kỹ năng chuyên môn mọi lúc, mọi nơi. Đăng ký ngay hôm nay để tiếp cận hàng loạt khóa học đa dạng, từ cơ bản đến nâng cao, được thiết kế bởi các chuyên gia hàng đầu trong ngành. Trải nghiệm dịch vụ thi thử chuyên nghiệp để đánh giá và cải thiện hiệu suất học tập của bạn một cách hiệu quả nhất !</span>
          <div className='mt-7 ml-16 w-fit group cursor-pointer px-[20px] py-[8px] bg-primary-bg-color rounded-md hover:bg-white border-[1px] border-transparent hover:border-primary-bg-color duration-75 shadow-md ease-linear'>
            <Link href="/register" className=" group-hover:text-primary-bg-color text-base no-underline font-medium text-white tracking-wide">Get Started</Link>
          </div>
        </div>
        <Image
          width={100}
          height={100}
          src="/img/.svg/Certification.svg"
          alt=""
          className=" w-3/6 "
        />
      </div>
      <div className=" max-w-full mt-20">
        <div className="">
          <h2 className=" font-semibold text-3xl text-center text-[#17165B]">Khóa học online nổi bật</h2>
          <div className="grid grid-cols-4 gap-14 mt-16">
            <div className='shadow-sm hover:shadow-xl transition duration-300 ease-in bg-white/55 rounded-lg'>
              <Link
                href="/courseDetails"
                className=" no-underline text-black ">
                <div className=" p-3 flex flex-col items-center">
                  <Image
                    width={100}
                    height={100}
                    src="/img/.svg/classroom.svg"
                    alt=""
                    className=" w-full p-3"
                  />
                  <h3 className=" text-base font-medium text-center">
                    [IELTS General Training] Intensive Reading: Từ Vựng - Chiến
                    Lược Làm Bài - Chữa đề chi tiết
                  </h3>
                  <div className=" pt-2 flex flex-col">
                    <div className="">
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className=" text-xl font-semibold text-price-color">699.000đ</span>
                    <span className=" text-xl line-through px-3">899.000đ</span>
                    <span className=" py-[3px] px-[6px] text-white font-bold text-sm bg-primary-bg-orange-color rounded-xl my-[10px]">-22%</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className='shadow-sm hover:shadow-xl transition duration-300 ease-in bg-white/55 rounded-lg'>
              <Link
                href="/courseDetails"
                className=" no-underline text-black ">
                <div className=" p-3 flex flex-col items-center">
                  <Image
                    width={100}
                    height={100}
                    src="/img/.svg/desk.svg"
                    alt=""
                    className=" w-full p-3"
                  />
                  <h3 className=" text-base font-medium text-center">
                    [IELTS General Training] Intensive Reading: Từ Vựng - Chiến
                    Lược Làm Bài - Chữa đề chi tiết
                  </h3>
                  <div className=" pt-2 flex flex-col">
                    <div className="">
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className=" text-xl font-semibold text-price-color">699.000đ</span>
                    <span className=" text-xl line-through px-3">899.000đ</span>
                    <span className=" py-[3px] px-[6px] text-white font-bold text-sm bg-primary-bg-orange-color rounded-xl my-[10px]">-22%</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className='shadow-sm hover:shadow-xl transition duration-300 ease-in bg-white/55 rounded-lg'>
              <Link
                href="/courseDetails"
                className=" no-underline text-black ">
                <div className=" p-3 flex flex-col items-center">
                  <Image
                    width={100}
                    height={100}
                    src="/img/.svg/grammar.svg"
                    alt=""
                    className=" w-full p-3"
                  />
                  <h3 className=" text-base font-medium text-center">
                    [IELTS General Training] Intensive Reading: Từ Vựng - Chiến
                    Lược Làm Bài - Chữa đề chi tiết
                  </h3>
                  <div className=" pt-2 flex flex-col">
                    <div className="">
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className=" text-xl font-semibold text-price-color">699.000đ</span>
                    <span className=" text-xl line-through px-3">899.000đ</span>
                    <span className=" py-[3px] px-[6px] text-white font-bold text-sm bg-primary-bg-orange-color rounded-xl my-[10px]">-22%</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className='shadow-sm hover:shadow-xl transition duration-300 ease-in bg-white/55 rounded-lg'>
              <Link
                href="/courseDetails"
                className=" no-underline text-black ">
                <div className=" p-3 flex flex-col items-center">
                  <Image
                    width={100}
                    height={100}
                    src="/img/.svg/program.svg"
                    alt=""
                    className=" w-full p-3"
                  />
                  <h3 className=" text-base font-medium text-center">
                    [IELTS General Training] Intensive Reading: Từ Vựng - Chiến
                    Lược Làm Bài - Chữa đề chi tiết
                  </h3>
                  <div className=" pt-2 flex flex-col">
                    <div className="">
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className=" text-xl font-semibold text-price-color">699.000đ</span>
                    <span className=" text-xl line-through px-3">899.000đ</span>
                    <span className=" py-[3px] px-[6px] text-white font-bold text-sm bg-primary-bg-orange-color rounded-xl my-[10px]">-22%</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="slider slider-middle">
            <Image
              width={100}
              height={100}
              src="https://study4.com/media/home/HomeBanner/2/files/Webp.net-resizeimage_69.jpg"
              alt=""
              className="slider__img"
            />
            <div className="arrow__container">
              <a href="" className="slider__link"
                ><i className="fa-solid fa-chevron-left slider__icon"></i
              ></a>
              <a href="" className="slider__link">
                <i className="fa-solid fa-chevron-right slider__icon"></i>
              </a>
            </div>
          </div>
          <div className="exam">
            <h2 className="exam__header">Đề thi mới nhất</h2>
            <div className="exam__container row">
              <a href="#" className="exam__link col l-3 m-4 c-6">
                <div className="exam__box">
                  <h4 className="exam__box-title">
                    IELTS Simulation Listening test 1
                  </h4>
                  <div className="exam__details">
                    <i className="fa-regular fa-clock"></i>
                    <span className="exam__text">40 phút |</span>
                    <i className="fa-solid fa-user-pen"></i>
                    <span className="exam__text">297723 |</span>
                    <i className="fa-regular fa-comment"></i>
                    <span className="exam__text">993</span>
                    <br />
                    <span className="exam__text">4 phần thi |</span>
                    <span className="exam__text">40 câu hỏi</span>
                  </div>
                  <div className="exam__tag-container">
                    <div className="exam__tag course__tag">#IELTS Academic</div>
                    <div className="exam__tag course__tag">#Listening</div>
                  </div>
                  <button className="exam__btn">Chi tiết</button>
                </div>
              </a>
              <a href="#" className="exam__link col l-3 m-4 c-6">
                <div className="exam__box">
                  <h4 className="exam__box-title">
                    IELTS Simulation Listening test 1
                  </h4>
                  <div className="exam__details">
                    <i className="fa-regular fa-clock"></i>
                    <span className="exam__text">40 phút |</span>
                    <i className="fa-solid fa-user-pen"></i>
                    <span className="exam__text">297723 |</span>
                    <i className="fa-regular fa-comment"></i>
                    <span className="exam__text">993</span>
                    <br />
                    <span className="exam__text">4 phần thi |</span>
                    <span className="exam__text">40 câu hỏi</span>
                  </div>
                  <div className="exam__tag-container">
                    <div className="exam__tag course__tag">#IELTS Academic</div>
                    <div className="exam__tag course__tag">#Listening</div>
                  </div>
                  <button className="exam__btn">Chi tiết</button>
                </div>
              </a>
              <a href="#" className="exam__link col l-3 m-4 c-6">
                <div className="exam__box">
                  <h4 className="exam__box-title">
                    IELTS Simulation Listening test 1
                  </h4>
                  <div className="exam__details">
                    <i className="fa-regular fa-clock"></i>
                    <span className="exam__text">40 phút |</span>
                    <i className="fa-solid fa-user-pen"></i>
                    <span className="exam__text">297723 |</span>
                    <i className="fa-regular fa-comment"></i>
                    <span className="exam__text">993</span>
                    <br />
                    <span className="exam__text">4 phần thi |</span>
                    <span className="exam__text">40 câu hỏi</span>
                  </div>
                  <div className="exam__tag-container">
                    <div className="exam__tag course__tag">#IELTS Academic</div>
                    <div className="exam__tag course__tag">#Listening</div>
                  </div>
                  <button className="exam__btn">Chi tiết</button>
                </div>
              </a>
              <a href="#" className="exam__link col l-3 m-4 c-6">
                <div className="exam__box">
                  <h4 className="exam__box-title">
                    IELTS Simulation Listening test 1
                  </h4>
                  <div className="exam__details">
                    <i className="fa-regular fa-clock"></i>
                    <span className="exam__text">40 phút |</span>
                    <i className="fa-solid fa-user-pen"></i>
                    <span className="exam__text">297723 |</span>
                    <i className="fa-regular fa-comment"></i>
                    <span className="exam__text">993</span>
                    <br />
                    <span className="exam__text">4 phần thi |</span>
                    <span className="exam__text">40 câu hỏi</span>
                  </div>
                  <div className="exam__tag-container">
                    <div className="exam__tag course__tag">#IELTS Academic</div>
                    <div className="exam__tag course__tag">#Listening</div>
                  </div>
                  <button className="exam__btn">Chi tiết</button>
                </div>
              </a>
            </div>
          </div>
          <div className="group">
            <h2 className="group__header">Tham gia cộng đồng</h2>
            <p className="group__details-text">
              và hơn 350.000 học viên tham gia mỗi tháng
            </p>
            <div className="group__container row">
              <div className="group__img col l-3 m-4 c-4">
                <Image
                  width={100}
                  height={100}
                  src="https://i.pinimg.com/564x/09/16/d5/0916d56858374ce99472a476b000028b.jpg"
                  alt=""
                />
              </div>
              <div className="group__details l-7 m-7 c-7">
                <i className="fa-solid fa-check group__icon"></i>
                <span className="group__text"
                  >Cộng đồng học tiếng Anh và luyện thi sôi nổi với hơn 250.000
                  học viên mỗi tháng</span
                >
                <br />
                <br />
                <i className="fa-solid fa-check group__icon"></i>
                <span className="group__text"
                  >Đặt câu hỏi cho đội ngũ trợ giảng cũng như các học viên khác
                  để nhận giải đáp sau 30 phút</span
                >
                <br />
                <br />
                <i className="fa-solid fa-check group__icon"></i>
                <span className="group__text"
                  >Chia sẻ kinh nghiệm học tập và làm bài thi với các thành viên
                  khác</span
                >
                <br />
                <br />
                <i className="fa-solid fa-check group__icon"></i>
                <span className="group__text"
                  >Luyện tập kỹ năng nói & viết và nhận được nhận xét và chấm
                  điểm từ cộng đồng và giảng viên</span
                >
                <br />
                <a href="#" className="group__link">Tham gia ngay</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="course-register">
        <Image
          src="https://images.pexels.com/photos/207756/pexels-photo-207756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={800}
          alt=""
          className="course-register__img"
        />
        <div className="course-register__container">
          <h2 className="course-register__header">Đăng ký thông tin khoá học</h2>
          <div className="course-register__information-box">
            <form action="">
              <input
                className="course-register__input"
                type="text"
                placeholder="Họ tên*"
              />
              <input
                className="course-register__input"
                type="tel"
                placeholder="Số điện thoại*"
              />
              <input
                className="course-register__input"
                type="text"
                placeholder="Khu vực học (thành phố/tỉnh)*"
              />
             <select defaultValue="default" name="" id="" className="course-register__input">
                <option value="default">Môn học bạn quan tâm</option>
                <option value="1">IELTS</option>
                <option value="2">TOEIC</option>
                <option value="3">IELTS Writing and Speaking</option>
                <option value="4">Tiếng Anh cơ bản</option>
              </select>
              <a href="" className="course-register__button"
                >Đăng ký tư vấn miễn phí</a
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
