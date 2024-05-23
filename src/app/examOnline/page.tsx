import Image from "next/image";
export default function ExamOnline()
{
    return(
        <div>
             <div className=" pt-[60px] bg-exam-bg-color rounded-2xl">
      <div className=" flex flex-col items-center">
        <h1 className="px-[16px] text-3xl font-semibold">Thư viện đề thi</h1>
        <div className=" mt-[30px] p-2">
          <ul className=" m-w-[790px] list-none flex flex-wrap">
            <li className=" mx-2 my-4">
              <a href="" className=" transition duration-500 ease-in-out py-[8px] px-[16px] rounded-[30px] text-base no-underline font-medium text-primary-bg-color-hover bg-[#E6F4FF]"
                >Tất cả</a
              >
            </li>
            <li className="mx-2 my-4">
              <a href="" className="transition duration-500 ease-in-out py-[8px] px-[16px] rounded-[30px] text-base no-underline font-normal  text-black hover:bg-[#E6F4FF]">IELTS Academic</a>
            </li>
            <li className="mx-2 my-4">
              <a href="" className="transition duration-500 ease-in-out py-[8px] px-[16px] rounded-[30px] text-base no-underline font-normal  text-black hover:bg-[#E6F4FF]">IELTS General</a>
            </li>
            <li className="mx-2 my-4">
              <a href="" className="transition duration-500 ease-in-out py-[8px] px-[16px] rounded-[30px] text-base no-underline font-normal  text-black hover:bg-[#E6F4FF]">TOEIC</a>
            </li>
            <li className="mx-2 my-4">
              <a href="" className="transition duration-500 ease-in-out py-[8px] px-[16px] rounded-[30px] text-base no-underline font-normal  text-black hover:bg-[#E6F4FF]">HSK 1</a>
            </li>
            <li className="mx-2 my-4">
              <a href="" className="transition duration-500 ease-in-out py-[8px] px-[16px] rounded-[30px] text-base no-underline font-normal  text-black hover:bg-[#E6F4FF]">HSK 2</a>
            </li>
            <li className="mx-2 my-4">
              <a href="" className="transition duration-500 ease-in-out py-[8px] px-[16px] rounded-[30px] text-base no-underline font-normal  text-black hover:bg-[#E6F4FF]">HSK 3</a>
            </li>
            <li className="mx-2 my-4">
              <a href="" className="transition duration-500 ease-in-out py-[8px] px-[16px] rounded-[30px] text-base no-underline font-normal  text-black hover:bg-[#E6F4FF]">HSK 4</a>
            </li>
            <li className="mx-2 my-4">
              <a href="" className="transition duration-500 ease-in-out py-[8px] px-[16px] rounded-[30px] text-base no-underline font-normal  text-black hover:bg-[#E6F4FF]">HSK 5</a>
            </li>
            <li className="mx-2 my-4">
              <a href="" className="transition duration-500 ease-in-out py-[8px] px-[16px] rounded-[30px] text-base no-underline font-normal  text-black hover:bg-[#E6F4FF]">HSK 6</a>
            </li>
          </ul>
        </div>
        <div className=" relative w-full max-w-3xl flex items-center gap-7">
          <input
            type="text"
            className=" w-4/5 ml-4 px-4 py-[10px] border-[2px] border-input-color rounded-[10px] text-base transition-[0.2s] focus:bg-white focus:border-primary-bg-color focus:shadow-md outline-none duration-100 ease-in-out"
            placeholder="Nhập từ khóa bạn muốn tìm kiếm: tên sách, dạng câu hỏi ..."
          />
          <i
            className="fa-solid fa-magnifying-glass text-lg font-black bg-primary-bg-color text-white px-7 cursor-pointer hover:bg-white hover:text-primary-bg-color border-[2px] border-transparent hover:border-primary-bg-color transition duration-100 ease-in-out py-2 rounded-lg"
          ></i>
        </div>
        <ul className=" ml-[10px] mt-[20px] max-w-5xl list-none flex flex-wrap w-full relative">
          <li className=" flex whitespace-nowrap">
            <a
              href=""
              className=" text-black duration-300 ease-in-out delay-100 no-underline text-xl p-[16px] border-b-[2px] border-b-transparent transition-[0.2s] hover:border-b-primary-bg-color-hover hover:text-primary-bg-color-hover"
              >Tất cả</a
            >
          </li>
          <li className=" flex whitespace-nowrap">
            <a
              href=""
              className=" text-black duration-300 ease-in-out delay-100 no-underline text-xl p-[16px] border-b-[2px] border-b-transparent transition-[0.2s] hover:border-b-primary-bg-color-hover hover:text-primary-bg-color-hover"
              >Đề rút gọn</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div className="relative p-16">
      <div className=" mt-8 grid grid-cols-3 gap-14">
        <a href="#" className=" group">
          <div className=" shadow-md flex flex-col items-center group-hover:shadow-lg transition duration-500 delay-75 ease-in-out bg-white p-4 rounded-xl mb-5">
          <div className=' w-full h-72 group relative overflow-hidden rounded-[10px] '>
            <Image className='object-fill transition duration-500 ease group-hover:brightness-[95%] group-hover:scale-105' 
            width={1000} 
            height={1000} 
            quality={100}
            alt='image' 
            src="/img/E-balck.jpg">
            </Image>
          </div>
            <h4 className=" text-xl font-medium text-center mt-4 tracking-wide">
              IELTS Simulation Listening test 1
            </h4>
            <div className=" flex flex-col w-full text-sm text-exam-text-color my-4">
              <div className='w-full flex items-center justify-between'>
                <div className=' flex gap-2 items-center'>
                  <i className="fa-regular fa-clock"></i>
                  <span className=" text-sm text-slate-700 font-semibold">40 phút</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <i className="fa-solid fa-user-pen"></i>
                  <span className="text-sm text-slate-700 font-semibold">297723</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <i className="fa-regular fa-comment"></i>
                  <span className="text-sm text-slate-700 font-semibold">993</span>
                </div>
              </div>
              <div>
              </div>
            </div>
            <div className=" flex gap-6">
              <div className=" rounded-md bg-[#F4EEFA] text-sm p-2 text-[#A482D6] inline-block">#IELTS Academic</div>
              <div className=" rounded-md bg-[#E6F4FF] text-sm p-2 text-[#1A9BFC] inline-block">#Listening</div>
            </div>
            <div className=' group mt-4'>
              <button className=" hover:bg-slate-100 px-5 py-2 cursor-pointer bg-transparent rounded-full border-[2px] border-[#C0E3EB] text-lg flex items-center gap-4">Chi tiết
              <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </a>
        <a href="#" className=" group">
          <div className=" shadow-md flex flex-col items-center group-hover:shadow-lg transition duration-500 delay-75 ease-in-out bg-white p-4 rounded-xl mb-5">
          <div className=' w-full h-72 group relative overflow-hidden rounded-[10px] '>
            <Image className='object-fill transition duration-500 ease group-hover:brightness-[95%] group-hover:scale-105' 
            width={1000} 
            height={1000} 
            quality={100}
            alt='image' 
            src="/img/bg_pro-E.jpg">
            </Image>
          </div>
            <h4 className=" text-xl font-medium text-center mt-4 tracking-wide">
              IELTS Simulation Listening test 1
            </h4>
            <div className=" flex flex-col w-full text-sm text-exam-text-color my-4">
              <div className='w-full flex items-center justify-between'>
                <div className=' flex gap-2 items-center'>
                  <i className="fa-regular fa-clock"></i>
                  <span className=" text-sm text-slate-700 font-semibold">40 phút</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <i className="fa-solid fa-user-pen"></i>
                  <span className="text-sm text-slate-700 font-semibold">297723</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <i className="fa-regular fa-comment"></i>
                  <span className="text-sm text-slate-700 font-semibold">993</span>
                </div>
              </div>
              <div>
              </div>
            </div>
            <div className=" flex gap-6">
              <div className=" rounded-md bg-[#F4EEFA] text-sm p-2 text-[#A482D6] inline-block">#IELTS Academic</div>
              <div className=" rounded-md bg-[#E6F4FF] text-sm p-2 text-[#1A9BFC] inline-block">#Listening</div>
            </div>
            <div className=' group mt-4'>
              <button className=" hover:bg-slate-100 px-5 py-2 cursor-pointer bg-transparent rounded-full border-[2px] border-[#C0E3EB] text-lg flex items-center gap-4">Chi tiết
              <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </a>
        <a href="#" className=" group">
          <div className=" shadow-md flex flex-col items-center group-hover:shadow-lg transition duration-500 delay-75 ease-in-out bg-white p-4 rounded-xl mb-5">
          <div className=' w-full h-72 group relative overflow-hidden rounded-[10px] '>
            <Image className='object-fill transition duration-500 ease group-hover:brightness-[95%] group-hover:scale-105' 
            width={1000} 
            height={1000} 
            quality={100}
            alt='image' 
            src="/img/Speak_E.jpg">
            </Image>
          </div>
            <h4 className=" text-xl font-medium text-center mt-4 tracking-wide">
              IELTS Simulation Listening test 1
            </h4>
            <div className=" flex flex-col w-full text-sm text-exam-text-color my-4">
              <div className='w-full flex items-center justify-between'>
                <div className=' flex gap-2 items-center'>
                  <i className="fa-regular fa-clock"></i>
                  <span className=" text-sm text-slate-700 font-semibold">40 phút</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <i className="fa-solid fa-user-pen"></i>
                  <span className="text-sm text-slate-700 font-semibold">297723</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <i className="fa-regular fa-comment"></i>
                  <span className="text-sm text-slate-700 font-semibold">993</span>
                </div>
              </div>
              <div>
              </div>
            </div>
            <div className=" flex gap-6">
              <div className=" rounded-md bg-[#F4EEFA] text-sm p-2 text-[#A482D6] inline-block">#IELTS Academic</div>
              <div className=" rounded-md bg-[#E6F4FF] text-sm p-2 text-[#1A9BFC] inline-block">#Listening</div>
            </div>
            <div className=' group mt-4'>
              <button className=" hover:bg-slate-100 px-5 py-2 cursor-pointer bg-transparent rounded-full border-[2px] border-[#C0E3EB] text-lg flex items-center gap-4">Chi tiết
              <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </a>
        <a href="#" className=" group">
          <div className=" shadow-md flex flex-col items-center group-hover:shadow-lg transition duration-500 delay-75 ease-in-out bg-white p-4 rounded-xl mb-5">
          <div className=' w-full h-72 group relative overflow-hidden rounded-[10px] '>
            <Image className='object-fill transition duration-500 ease group-hover:brightness-[95%] group-hover:scale-105' 
            width={1000} 
            height={1000} 
            quality={100}
            alt='image' 
            src="/img/E-learn.jpg">
            </Image>
          </div>
            <h4 className=" text-xl font-medium text-center mt-4 tracking-wide">
              IELTS Simulation Listening test 1
            </h4>
            <div className=" flex flex-col w-full text-sm text-exam-text-color my-4">
              <div className='w-full flex items-center justify-between'>
                <div className=' flex gap-2 items-center'>
                  <i className="fa-regular fa-clock"></i>
                  <span className=" text-sm text-slate-700 font-semibold">40 phút</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <i className="fa-solid fa-user-pen"></i>
                  <span className="text-sm text-slate-700 font-semibold">297723</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <i className="fa-regular fa-comment"></i>
                  <span className="text-sm text-slate-700 font-semibold">993</span>
                </div>
              </div>
              <div>
              </div>
            </div>
            <div className=" flex gap-6">
              <div className=" rounded-md bg-[#F4EEFA] text-sm p-2 text-[#A482D6] inline-block">#IELTS Academic</div>
              <div className=" rounded-md bg-[#E6F4FF] text-sm p-2 text-[#1A9BFC] inline-block">#Listening</div>
            </div>
            <div className=' group mt-4'>
              <button className=" hover:bg-slate-100 px-5 py-2 cursor-pointer bg-transparent rounded-full border-[2px] border-[#C0E3EB] text-lg flex items-center gap-4">Chi tiết
              <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
    )
}