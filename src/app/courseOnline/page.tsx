import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";

const wordss = ["trực tuyến", "chất lượng", "chuẩn CEFR", "miễn phí"];

const words = ` Những khoá học tiếng Anh online chất lượng cao của E-STUDY được thiết
kế theo chương trình tiếng Anh chuẩn CEFR (A1-C2) của đại học
Cambridge và Oxford (Anh) với hệ thống bài giảng, bài tập phong phú
đa dạng. Bạn có thể học thử miễn phí trước khi đặt mua sản phẩm.`;

export default function CourseOOnline()
{
    return(
        <div>
      <div className="">
        <div className="">
          <h1 className=" text-4xl font-semibold">Khóa học<span className=" text-primary-bg-color"><FlipWords className="text-primary-bg-color" words={wordss} /></span></h1>
          <p className="content__text">
          <TextGenerateEffect words={words} />
          </p>
        </div>
        <div className="relative p-16">
            <h2 className="  font-semibold text-3xl text-[#17165B] ">Combo khoá học đặc biệt :</h2>
            <div className=" mt-16 grid grid-cols-3 gap-14">
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
        <div className="relative p-16">
          <h2 className="  font-semibold text-3xl text-[#17165B] ">Combo khoá học đặc biệt :</h2>
          <div className=" mt-16 grid grid-cols-3 gap-14">
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
        <div className="relative p-16">
          <h2 className="  font-semibold text-3xl text-[#17165B] ">Combo khoá học đặc biệt :</h2>
          <div className=" mt-16 grid grid-cols-3 gap-14">
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
    </div>
    )
}