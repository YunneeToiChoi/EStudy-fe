import  Link  from 'next/link';
export default function Body(){
    return(
        <div>
             <nav className=" fixed bg-white border-b-[1px] border-b-course-border-color w-full p-6 flex items-center justify-between ">
            <div
              className="max-lg:hidden flex items-center">
              <Link href="" className=" no-underline text-nav-hover-text-color text-sm"
                >IELTS General Reading
              </Link>
              <i className=" text-sm px-1 text-nav-hover-text-color fa-solid fa-chevron-right"></i>
              <span className="no-underline text-nav-hover-text-color text-sm font-medium">Bài học thử</span>
            </div>
            <label className="lg:hidden" htmlFor="nav-mobile-course-checkbox"
              ><i className="fa-solid fa-bars text-xl mr-5 cursor-pointer"></i
            ></label>
          </nav>
          <input
            type="checkbox"
            id="nav-mobile-course-checkbox"
            className=" peer/blockMenu nav-mobile-course__input"
          />
          <div className="peer-checked/blockMenu:-translate-x-0 fixed bg-white pt-[120px] h-full top-0 bottom-0 right-0 left-0 -translate-x-full transition duration-500 ease-in-out">
            <div className=" flex px-2 py-5 bg-nav-hover-text-color items-center justify-between">
              <Link href="" className=" text-xl no-underline text-white">IELTS General Reading</Link>
                <label htmlFor="nav-mobile-course-checkbox"
                  ><i className=" text-white text-xl cursor-pointer fa-solid fa-angle-left"></i
                ></label>
            </div>
            <div className=" border-r-[1px] border-r-[#e0e0e0]">
              <ul className=" list-none">
                <li className="course-learn__item">
                  <Link
                    href=""
                    className=" border-l-4 border-l-transparent hover:border-l-nav-hover-text-color hover:bg-tag-search-bg-color block px-5 py-4 no-underline text-base text-black transition duration-300 ease-in-out"
                    >Bài học thử</Link
                  >
                </li>
                <li className="course-learn__item">
                  <Link href="" className=" border-l-4 border-l-transparent hover:border-l-nav-hover-text-color hover:bg-tag-search-bg-color block px-5 py-4 no-underline text-base text-black transition duration-300 ease-in-out">
                    Phương pháp làm các dạng câu hỏi trong IELTS General Reading
                  </Link>
                </li>
                <li className="course-learn__item">
                  <Link href="" className=" border-l-4 border-l-transparent hover:border-l-nav-hover-text-color hover:bg-tag-search-bg-color block px-5 py-4 no-underline text-base text-black transition duration-300 ease-in-out">
                    Video chữa đề chi tiết
                  </Link>
                </li>
                <li className="course-learn__item">
                  <Link href="" className=" border-l-4 border-l-transparent hover:border-l-nav-hover-text-color hover:bg-tag-search-bg-color block px-5 py-4 no-underline text-base text-black transition duration-300 ease-in-out"> PRACTICE ZONE </Link>
                </li>
                <li className="course-learn__item">
                  <Link href="" className=" border-l-4 border-l-transparent hover:border-l-nav-hover-text-color hover:bg-tag-search-bg-color block px-5 py-4 no-underline text-base text-black transition duration-300 ease-in-out">
                    GT Practice Set 7 Test 1: Luyện tập từ vựng
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex py-[60px]">
            <div className=" mx-auto max-2xl:mx-[40px] w-[1000px] grid">
              <h1 className=" text-3xl font-semibold mt-[50px]">Bài học thử</h1>
              <div className=" bg-white p-5 border-[1px] border-course-border-color rounded-[10px] shadow-lg text-base my-[40px] w-full">
                <h2 className="content__box-header">Tiến độ học tập</h2>
                <p className="content__box-percent">0%</p>
                <div className=" p-1 w-full bg-[#e0e0e0] rounded-[10px]"></div>
              </div>
              <div className="bg-white p-5 border-[1px] border-course-border-color rounded-[10px] shadow-lg text-base my-[40px] w-full">
                <h2 className="content__box-header">Hướng dẫn làm dạng T/F/NG</h2>
                <Link href="" className=" flex items-center text-base p-3 no-underline text-black">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className=" mx-2">Video bài giảng:</h3>
                  <span className=" text-xl"> Lý thuyết</span>
                </Link>
                <Link href="" className="flex items-center text-base p-3 no-underline text-black">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="mx-2">Video bài giảng:</h3>
                  <span className="text-xl"> Lý thuyết</span>
                </Link>
              </div>
              <div className="bg-white p-5 border-[1px] border-course-border-color rounded-[10px] shadow-lg text-base my-[40px] w-full">
                <h2 className="content__box-header">Hướng dẫn làm dạng T/F/NG</h2>
                <Link href="" className=" flex items-center text-base p-3 no-underline text-black">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className=" mx-2">Video bài giảng:</h3>
                  <span className=" text-xl"> Lý thuyết</span>
                </Link>
                <Link href="" className="flex items-center text-base p-3 no-underline text-black">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="mx-2">Video bài giảng:</h3>
                  <span className="text-xl"> Lý thuyết</span>
                </Link>
              </div>
              <div className="bg-white p-5 border-[1px] border-course-border-color rounded-[10px] shadow-lg text-base my-[40px] w-full">
                <h2 className="content__box-header">Hướng dẫn làm dạng T/F/NG</h2>
                <Link href="" className=" flex items-center text-base p-3 no-underline text-black">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className=" mx-2">Video bài giảng:</h3>
                  <span className=" text-xl"> Lý thuyết</span>
                </Link>
                <Link href="" className="flex items-center text-base p-3 no-underline text-black">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="mx-2">Video bài giảng:</h3>
                  <span className="text-xl"> Lý thuyết</span>
                </Link>
              </div>
              <div className="bg-white p-5 border-[1px] border-course-border-color rounded-[10px] shadow-lg text-base my-[40px] w-full">
                <h2 className="content__box-header">Hướng dẫn làm dạng T/F/NG</h2>
                <Link href="" className=" flex items-center text-base p-3 no-underline text-black">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className=" mx-2">Video bài giảng:</h3>
                  <span className=" text-xl"> Lý thuyết</span>
                </Link>
                <Link href="" className="flex items-center text-base p-3 no-underline text-black">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="mx-2">Video bài giảng:</h3>
                  <span className="text-xl"> Lý thuyết</span>
                </Link>
              </div>
              <Link href="" className=" mt-[30px] text-base text-white bg-nav-hover-text-color px-[14px] py-[10px] rounded no-underline w-fit">1</Link>
            </div>
          </div>
        </div>
    )
}