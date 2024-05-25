import  Link  from 'next/link';
export default function ActiveCourse()
{
    return(
        <div >
      <div className="pt-10 flex mx-[40px] items-center justify-center">
        <div className=" w-[600px] px-[60px] py-[30px] border-[1px] border-course-border-color rounded-xl shadow-md">
          <h3 className="text-4xl font-medium">Kích hoạt khoá học</h3>
          <p className=" text-base font-medium my-[10px]">Mã kích hoạt</p>
          <input
            type="text"
            className=" text-base w-full p-3 border-[1px] border-input-color rounded-md"
            placeholder="Nhập mã kích hoạt"
          />
          <p className=" text-base font-medium my-[10px]">Số điện thoại mua hàng</p>
          <input
            type="text"
            className=" text-base w-full p-3 border-[1px] border-input-color rounded-md"
            placeholder="Nhập số điện thoại trong phiếu kích hoạt"
          />
          <Link href="#" className=' w-full block text-center group cursor-pointer my-5 py-[10px] bg-primary-bg-color rounded-md hover:bg-white border-[1px] border-transparent hover:border-primary-bg-color duration-75 shadow-md ease-linear'>
            <span  className=" group-hover:text-primary-bg-color text-lg font-medium no-underline text-white tracking-wide">Kích hoạt</span>
          </Link>
          <Link href="" className=" block mt-5 underline text-black text-base transition duration-300 ease-in-out hover:text-primary-bg-color"
            >Kiểm tra tài khoản đã kích hoạt khóa học</Link>
        </div>
      </div>
    </div>
    )
}